/**
 * React hook for accessing user roles
 */

import { useContext } from "react";
import { CustomAppContext } from "../components/CustomAppProvider";
import type { UserRole } from "../types";

/**
 * Hook to get current user roles
 * @returns Array of user roles or empty array if not available
 */
export function useUserRoles(): readonly UserRole[] {
  const context = useContext(CustomAppContext);

  if (!context) {
    throw new Error("useUserRoles must be used within a CustomAppProvider");
  }

  return context.context?.userRoles || [];
}
