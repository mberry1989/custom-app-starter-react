/**
 * React hook for accessing custom app configuration
 */

import { useContext } from "react";
import { CustomAppContext } from "../components/CustomAppProvider";
import type { AppConfig } from "../types";

/**
 * Hook to access the custom app configuration
 * @returns App configuration object or null if not available
 */
export function useConfig(): AppConfig | null {
  const context = useContext(CustomAppContext);

  if (!context) {
    throw new Error("useConfig must be used within a CustomAppProvider");
  }

  return context.config;
}
