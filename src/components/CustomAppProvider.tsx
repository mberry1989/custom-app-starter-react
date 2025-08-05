/**
 * React context provider for Custom App SDK
 */

import { createContext, type ReactNode } from "react";
import { useCustomAppContext } from "../hooks/useCustomAppContext";
import type { CustomAppState } from "../types";

/**
 * Context for sharing custom app state throughout the component tree
 */
export const CustomAppContext = createContext<CustomAppState | null>(null);

/**
 * Props for CustomAppProvider component
 */
interface CustomAppProviderProps {
  children: ReactNode;
}

/**
 * Provider component that initializes the Custom App SDK and provides
 * the app state to all child components
 */
export function CustomAppProvider({ children }: CustomAppProviderProps) {
  const appState = useCustomAppContext();

  return <CustomAppContext.Provider value={appState}>{children}</CustomAppContext.Provider>;
}
