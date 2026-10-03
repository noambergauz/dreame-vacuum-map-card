const SELECT_PLACEHOLDERS = new Set(['unknown', 'unavailable', 'none']);

export function isSelectPlaceholder(value: string): boolean {
  return SELECT_PLACEHOLDERS.has(value.trim().toLowerCase());
}

export function publishedOptionList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((option): option is string => typeof option === 'string' && !isSelectPlaceholder(option));
}

export function sameStringList(left: readonly string[], right: readonly string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

export interface SelectDisplay {
  options: string[];
  clicksEnabled: boolean;
  rememberedOptions: string[];
}

export function resolvePublishedOptions(input: {
  selectOptions: readonly string[];
  attributeList?: readonly string[];
  rememberedOptions: readonly string[];
}): SelectDisplay {
  const selectOptions = publishedOptionList(input.selectOptions);
  if (selectOptions.length > 0) {
    return { options: selectOptions, clicksEnabled: true, rememberedOptions: selectOptions };
  }

  const remembered =
    input.rememberedOptions.length > 0 ? [...input.rememberedOptions] : publishedOptionList(input.attributeList);
  return { options: remembered, clicksEnabled: false, rememberedOptions: remembered };
}

export interface SuctionDisplay extends SelectDisplay {
  highlight: string;
  sendFanSpeed: boolean;
}

export function resolveSuctionDisplay(input: {
  cleaning: boolean;
  selectOptions: readonly string[];
  attributeList: readonly string[];
  rememberedOptions: readonly string[];
  fanSpeedList: readonly string[];
  fanSpeed: string;
  suctionLevel: string;
  maxSuctionPower: boolean;
}): SuctionDisplay {
  const published = resolvePublishedOptions(input);
  if (input.cleaning) {
    const fanSpeeds = publishedOptionList(input.fanSpeedList);
    return {
      options: fanSpeeds,
      clicksEnabled: fanSpeeds.length > 0,
      rememberedOptions: published.rememberedOptions,
      highlight: input.fanSpeed,
      sendFanSpeed: true,
    };
  }

  return {
    ...published,
    highlight: input.maxSuctionPower ? '' : input.suctionLevel,
    sendFanSpeed: false,
  };
}
