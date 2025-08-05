/**
 * React hook for accessing environment ID
 */

import { useContext } from "react";
import { CustomAppContext } from "../components/CustomAppProvider";

/**
 * Hook to get the current environment ID
 * @returns Environment ID string or null if not available
 */
export function useEnvironmentId(): string | null {
  const context = useContext(CustomAppContext);

  if (!context) {
    throw new Error("useEnvironmentId must be used within a CustomAppProvider");
  }

  return context.context?.environmentId || null;
}
