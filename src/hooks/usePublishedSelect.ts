import { useState } from 'react';
import { resolvePublishedOptions, sameStringList, type SelectDisplay } from '@/utils/selectDisplay';

export function usePublishedSelect(
  selectOptions: readonly string[],
  attributeList: readonly string[] = []
): SelectDisplay {
  const [rememberedOptions, setRememberedOptions] = useState<string[]>([]);
  const display = resolvePublishedOptions({ selectOptions, attributeList, rememberedOptions });
  if (!sameStringList(rememberedOptions, display.rememberedOptions)) {
    setRememberedOptions(display.rememberedOptions);
  }
  return display;
}
