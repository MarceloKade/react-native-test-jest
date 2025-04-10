import type { AccessibilityRole } from "react-native";

export type AccessibilityMap<T extends string> = Record<T, AccessibilityRole>;
