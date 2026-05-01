#!/usr/bin/env python3
"""
Extract entity definitions from dreame-vacuum integration.
"""

import os
import re
import sys
from datetime import datetime
from pathlib import Path

DEFAULT_INTEGRATION_PATH = os.path.expanduser("~/Projects/dreame-vacuum")
CUSTOM_COMPONENTS_PATH = "custom_components/dreame_vacuum"
OUTPUT_FILE = "src/generated/dreame-entities.ts"


def get_integration_version(integration_path: Path) -> str:
    init_file = integration_path / "dreame" / "__init__.py"
    if init_file.exists():
        content = init_file.read_text()
        match = re.search(r'VERSION\s*=\s*["\']([^"\']+)["\']', content)
        if match:
            return match.group(1)
    return "unknown"


def extract_entities_regex(file_path: Path, description_class: str) -> list[dict]:
    if not file_path.exists():
        return []

    content = file_path.read_text()
    entities = []

    # Find all entity description blocks
    pattern = rf"{description_class}\(\s*([^)]+(?:\([^)]*\)[^)]*)*)\)"

    for match in re.finditer(pattern, content, re.DOTALL):
        block = match.group(1)
        entity = {}

        # Extract property_key
        prop_match = re.search(r"property_key\s*=\s*(?:DreameVacuum\w+\.)?(\w+)", block)
        if prop_match:
            entity["property_key"] = prop_match.group(1)

        # Extract action_key
        action_match = re.search(
            r"action_key\s*=\s*(?:DreameVacuumAction\.)?(\w+)", block
        )
        if action_match:
            entity["action_key"] = action_match.group(1)

        # Extract key - static string
        key_match = re.search(r'(?<![_\w])key\s*=\s*["\']([^"\']+)["\']', block)
        if key_match:
            entity["key"] = key_match.group(1)

        # Extract key - dynamic from property enum (e.g., key=DreameVacuumProperty.WETNESS_LEVEL.name.lower())
        if not entity.get("key"):
            dyn_key_match = re.search(
                r"(?<![_\w])key\s*=\s*DreameVacuumProperty\.(\w+)\.name\.lower\s*\(",
                block,
            )
            if dyn_key_match:
                entity["key"] = dyn_key_match.group(1).lower()

        # Extract name
        name_match = re.search(r'(?<![_\w])name\s*=\s*["\']([^"\']+)["\']', block)
        if name_match:
            entity["name"] = name_match.group(1)

        # Extract static icon (not icon_fn)
        icon_match = re.search(r'(?<![_\w])icon\s*=\s*["\']([^"\']+)["\']', block)
        if icon_match:
            entity["icon"] = icon_match.group(1)

        # Extract entity_category
        category_match = re.search(
            r"entity_category\s*=\s*EntityCategory\.(\w+)", block
        )
        if category_match:
            entity["category"] = category_match.group(1).lower()

        if entity.get("property_key") or entity.get("key") or entity.get("action_key"):
            entities.append(entity)

    return entities


def extract_enum_members(file_path: Path, enum_name: str) -> list[str]:
    if not file_path.exists():
        return []

    content = file_path.read_text()
    members = []

    # Find the enum class
    pattern = rf'class {enum_name}\([^)]+\):\s*(?:"""[^"]*"""\s*)?((?:\s+\w+\s*=\s*[^\n]+\n?)+)'
    match = re.search(pattern, content)

    if match:
        enum_body = match.group(1)
        for line in enum_body.split("\n"):
            member_match = re.match(r"\s+(\w+)\s*=", line)
            if member_match:
                members.append(member_match.group(1))

    return members


def extract_capabilities(integration_path: Path) -> list[str]:
    capabilities = set()

    types_file = integration_path / "dreame" / "types.py"
    if not types_file.exists():
        return []

    content = types_file.read_text()

    # Extract from DreameVacuumDeviceCapability class __init__ method
    # Look for "self.capability_name = False" or "self.capability_name = True" patterns
    class_match = re.search(
        r"class DreameVacuumDeviceCapability:.*?def __init__\(self.*?\).*?:(.*?)(?=\n    def |\n    @property|\nclass |\Z)",
        content,
        re.DOTALL,
    )

    if class_match:
        init_body = class_match.group(1)
        # Match self.attr = False/True/None/value patterns (capability attributes)
        attr_matches = re.findall(r"self\.(\w+)\s*=\s*(?:False|True|None|\d+|\")", init_body)
        for attr in attr_matches:
            # Skip private attributes and non-capability ones
            if not attr.startswith("_") and attr not in ("key", "list", "robot_type"):
                capabilities.add(attr)

    # Extract @property methods in DreameVacuumDeviceCapability that return bool
    # These are dynamic capabilities like 'map', 'cruising', 'custom_cleaning_mode'
    class_full_match = re.search(
        r"class DreameVacuumDeviceCapability:(.*?)(?=\nclass |\Z)",
        content,
        re.DOTALL,
    )

    if class_full_match:
        class_body = class_full_match.group(1)
        # Find @property decorated methods
        property_matches = re.findall(
            r"@property\s+def\s+(\w+)\(self\)\s*->\s*bool:",
            class_body,
        )
        for prop in property_matches:
            if not prop.startswith("_"):
                capabilities.add(prop)

    # Also extract from DeviceCapability enum for completeness
    enum_match = re.search(
        r"class DeviceCapability\(IntEnum\):(.*?)(?=\nclass |\Z)",
        content,
        re.DOTALL,
    )

    if enum_match:
        enum_body = enum_match.group(1)
        enum_members = re.findall(r"^\s+(\w+)\s*=\s*\d+", enum_body, re.MULTILINE)
        for member in enum_members:
            capabilities.add(member.lower())

    return sorted(capabilities)


def extract_services(file_path: Path) -> list[dict]:
    if not file_path.exists():
        return []

    content = file_path.read_text()
    services = []

    for line in content.split("\n"):
        if (
            line
            and not line.startswith(" ")
            and not line.startswith("#")
            and ":" in line
        ):
            service_name = line.split(":")[0].strip()
            if service_name:
                services.append({"key": service_name})

    return services


def entity_to_key(entity: dict) -> str:
    if "key" in entity:
        return entity["key"].upper().replace(" ", "_").replace("-", "_")
    if "property_key" in entity:
        return entity["property_key"]
    if "action_key" in entity:
        return entity["action_key"]
    return "UNKNOWN"


def entity_to_snake_key(entity: dict) -> str:
    if "key" in entity:
        return entity["key"]
    if "property_key" in entity:
        return entity["property_key"].lower()
    if "action_key" in entity:
        return entity["action_key"].lower()
    return "unknown"


def generate_typescript(
    sensors: list[dict],
    switches: list[dict],
    selects: list[dict],
    buttons: list[dict],
    numbers: list[dict],
    times: list[dict],
    binary_sensors: list[dict],
    services: list[dict],
    capabilities: list[str],
    properties: list[str],
    actions: list[str],
    segment_selects: list[dict],
    segment_numbers: list[dict],
    version: str,
) -> str:
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    lines = [
        "/**",
        " * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY",
        f" * Source: dreame-vacuum integration {version}",
        f" * Generated: {timestamp}",
        " * ",
        " * Run: python scripts/extract-dreame-entities.py",
        " */",
        "",
    ]

    def write_entity_object(name: str, entities: list[dict], platform: str) -> None:
        lines.append(f"export const {name} = {{")
        seen_keys = set()
        for entity in entities:
            key = entity_to_key(entity)
            if key in seen_keys or key == "UNKNOWN":
                continue
            seen_keys.add(key)

            snake_key = entity_to_snake_key(entity)
            icon = entity.get("icon", "")
            category = entity.get("category", "")
            name_str = entity.get("name", "")

            parts = [f"key: '{snake_key}'", f"platform: '{platform}'"]
            if icon:
                parts.append(f"icon: '{icon}'")
            if category:
                parts.append(f"category: '{category}'")
            if name_str:
                parts.append(f"name: '{name_str}'")

            lines.append(f"  {key}: {{ {', '.join(parts)} }},")
        lines.append("} as const;")
        lines.append("")

    def write_simple_object(name: str, items: list[str]) -> None:
        lines.append(f"export const {name} = {{")
        for item in items:
            upper_key = item.upper()
            lower_val = item.lower()
            lines.append(f"  {upper_key}: '{lower_val}',")
        lines.append("} as const;")
        lines.append("")

    def write_services_object(services_list: list[dict]) -> None:
        lines.append("export const DREAME_SERVICES = {")
        for service in services_list:
            key = service["key"].upper()
            snake_key = service["key"]
            domain = "dreame_vacuum" if snake_key.startswith("vacuum_") else "select"
            lines.append(f"  {key}: {{ key: '{snake_key}', domain: '{domain}' }},")
        lines.append("} as const;")
        lines.append("")

    write_entity_object("DREAME_SENSORS", sensors, "sensor")
    write_entity_object("DREAME_SWITCHES", switches, "switch")
    write_entity_object("DREAME_SELECTS", selects, "select")
    write_entity_object("DREAME_BUTTONS", buttons, "button")
    write_entity_object("DREAME_NUMBERS", numbers, "number")
    write_entity_object("DREAME_TIMES", times, "time")
    write_entity_object("DREAME_BINARY_SENSORS", binary_sensors, "binary_sensor")

    lines.append("// Per-room entity templates")
    write_entity_object("DREAME_SEGMENT_SELECTS", segment_selects, "select")
    write_entity_object("DREAME_SEGMENT_NUMBERS", segment_numbers, "number")

    write_services_object(services)
    write_simple_object("DREAME_CAPABILITIES", capabilities)
    write_simple_object("DREAME_PROPERTIES", properties)
    write_simple_object("DREAME_ACTIONS", actions)

    lines.extend(
        [
            "// Helper types",
            "export type DreameSensorKey = keyof typeof DREAME_SENSORS;",
            "export type DreameSwitchKey = keyof typeof DREAME_SWITCHES;",
            "export type DreameSelectKey = keyof typeof DREAME_SELECTS;",
            "export type DreameButtonKey = keyof typeof DREAME_BUTTONS;",
            "export type DreameNumberKey = keyof typeof DREAME_NUMBERS;",
            "export type DreameTimeKey = keyof typeof DREAME_TIMES;",
            "export type DreameBinarySensorKey = keyof typeof DREAME_BINARY_SENSORS;",
            "export type DreameServiceKey = keyof typeof DREAME_SERVICES;",
            "export type DreameCapability = keyof typeof DREAME_CAPABILITIES;",
            "",
            "export function buildEntityId(",
            "  platform: string,",
            "  deviceName: string,",
            "  entityKey: string",
            "): string {",
            "  return `${platform}.${deviceName}_${entityKey}`;",
            "}",
            "",
            "export function buildSegmentEntityId(",
            "  platform: string,",
            "  deviceName: string,",
            "  segmentId: number,",
            "  entityKey: string",
            "): string {",
            "  return `${platform}.${deviceName}_room_${segmentId}_${entityKey}`;",
            "}",
            "",
        ]
    )

    return "\n".join(lines)


def main():
    integration_path = Path(
        sys.argv[1] if len(sys.argv) > 1 else DEFAULT_INTEGRATION_PATH
    )
    integration_path = integration_path / CUSTOM_COMPONENTS_PATH

    if not integration_path.exists():
        print(f"Error: Integration path not found: {integration_path}")
        sys.exit(1)

    print(f"Extracting entities from: {integration_path}")

    version = get_integration_version(integration_path)
    print(f"Integration version: {version}")

    # Extract entities from each platform file
    sensors = extract_entities_regex(
        integration_path / "sensor.py", "DreameVacuumSensorEntityDescription"
    )
    switches = extract_entities_regex(
        integration_path / "switch.py", "DreameVacuumSwitchEntityDescription"
    )
    selects = extract_entities_regex(
        integration_path / "select.py", "DreameVacuumSelectEntityDescription"
    )
    buttons = extract_entities_regex(
        integration_path / "button.py", "DreameVacuumButtonEntityDescription"
    )
    numbers = extract_entities_regex(
        integration_path / "number.py", "DreameVacuumNumberEntityDescription"
    )
    times = extract_entities_regex(
        integration_path / "time.py", "DreameVacuumTimeEntityDescription"
    )
    binary_sensors = extract_entities_regex(
        integration_path / "binary_sensor.py",
        "DreameVacuumBinarySensorEntityDescription",
    )

    # For segment entities, we need to check the SEGMENT_ tuples
    # These use the same description classes but are in separate tuples
    segment_selects_content = (
        (integration_path / "select.py").read_text()
        if (integration_path / "select.py").exists()
        else ""
    )
    segment_numbers_content = (
        (integration_path / "number.py").read_text()
        if (integration_path / "number.py").exists()
        else ""
    )

    # Extract segment entities by finding SEGMENT_SELECTS and SEGMENT_NUMBERS sections
    segment_selects = []
    segment_numbers = []

    # Find SEGMENT_SELECTS section
    seg_sel_match = re.search(
        r"SEGMENT_SELECTS.*?=.*?\((.*?)\)\s*(?=\n\w|\nclass|\nasync|\Z)",
        segment_selects_content,
        re.DOTALL,
    )
    if seg_sel_match:
        seg_content = seg_sel_match.group(1)
        for match in re.finditer(
            r"DreameVacuumSelectEntityDescription\(\s*([^)]+(?:\([^)]*\)[^)]*)*)\)",
            seg_content,
            re.DOTALL,
        ):
            block = match.group(1)
            entity = {}
            prop_match = re.search(
                r"property_key\s*=\s*(?:DreameVacuum\w+\.)?(\w+)", block
            )
            if prop_match:
                entity["property_key"] = prop_match.group(1)
            key_match = re.search(r'(?<![_\w])key\s*=\s*["\']([^"\']+)["\']', block)
            if key_match:
                entity["key"] = key_match.group(1)
            if entity:
                segment_selects.append(entity)

    # Find SEGMENT_NUMBERS section
    seg_num_match = re.search(
        r"SEGMENT_NUMBERS.*?=.*?\((.*?)\)\s*(?=\n\w|\nclass|\nasync|\Z)",
        segment_numbers_content,
        re.DOTALL,
    )
    if seg_num_match:
        seg_content = seg_num_match.group(1)
        for match in re.finditer(
            r"DreameVacuumNumberEntityDescription\(\s*([^)]+(?:\([^)]*\)[^)]*)*)\)",
            seg_content,
            re.DOTALL,
        ):
            block = match.group(1)
            entity = {}
            prop_match = re.search(
                r"property_key\s*=\s*(?:DreameVacuum\w+\.)?(\w+)", block
            )
            if prop_match:
                entity["property_key"] = prop_match.group(1)
            key_match = re.search(r'(?<![_\w])key\s*=\s*["\']([^"\']+)["\']', block)
            if key_match:
                entity["key"] = key_match.group(1)
            if entity:
                segment_numbers.append(entity)

    # Extract services
    services = extract_services(integration_path / "services.yaml")

    # Extract capabilities
    capabilities = extract_capabilities(integration_path)

    # Extract properties and actions from types.py
    types_file = integration_path / "dreame" / "types.py"
    properties = extract_enum_members(types_file, "DreameVacuumProperty")
    actions = extract_enum_members(types_file, "DreameVacuumAction")

    print(
        f"Found: {len(sensors)} sensors, {len(switches)} switches, {len(selects)} selects"
    )
    print(f"Found: {len(buttons)} buttons, {len(numbers)} numbers, {len(times)} times")
    print(f"Found: {len(binary_sensors)} binary_sensors")
    print(
        f"Found: {len(segment_selects)} segment_selects, {len(segment_numbers)} segment_numbers"
    )
    print(f"Found: {len(services)} services, {len(capabilities)} capabilities")
    print(f"Found: {len(properties)} properties, {len(actions)} actions")

    # Generate TypeScript
    ts_content = generate_typescript(
        sensors=sensors,
        switches=switches,
        selects=selects,
        buttons=buttons,
        numbers=numbers,
        times=times,
        binary_sensors=binary_sensors,
        services=services,
        capabilities=capabilities,
        properties=properties,
        actions=actions,
        segment_selects=segment_selects,
        segment_numbers=segment_numbers,
        version=version,
    )

    # Write output
    output_path = Path(__file__).parent.parent / OUTPUT_FILE
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(ts_content)

    print(f"Generated: {output_path}")


if __name__ == "__main__":
    main()
