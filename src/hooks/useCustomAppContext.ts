/**
 * React hook for accessing Custom App SDK context
 */

import { getCustomAppContext } from "@kontent-ai/custom-app-sdk";
import { useEffect, useState } from "react";
import type { AppConfig, AppContext, CustomAppState } from "../types";

/**
 * Hook to get custom app context from Kontent.ai
 * @returns Custom app state with loading, error, config, and context
 */
export function useCustomAppContext(): CustomAppState {
  const [state, setState] = useState<CustomAppState>({
    isLoading: true,
    error: null,
    config: null,
    context: null,
  });

  useEffect(() => {
    let isMounted = true;

    const initializeApp = async () => {
      try {
        const response = await getCustomAppContext();

        if (!isMounted) {
          return;
        }

        if (response.isError) {
          setState({
            isLoading: false,
            error: response.description || "Failed to initialize custom app",
            config: null,
            context: null,
          });
          return;
        }

        // Use configuration from Kontent.ai (or empty object if none provided)
        const config: AppConfig =
          response.config && typeof response.config === "object"
            ? (response.config as AppConfig)
            : {};

        // Extract context data
        const context: AppContext | null = response.context
          ? {
              environmentId: response.context.environmentId,
              userId: response.context.userId,
              userEmail: response.context.userEmail,
              userRoles: response.context.userRoles || [],
            }
          : null;

        setState({
          isLoading: false,
          error: null,
          config,
          context,
        });
      } catch (error) {
        if (!isMounted) {
          return;
        }

        let errorMessage = "Unknown error occurred";

        if (error instanceof Error) {
          // Check for specific iframe error
          if (error.message.includes("Custom app is not hosted in an IFrame")) {
            errorMessage =
              "This app must be hosted within the Kontent.ai CMS interface. Please open this app from within your Kontent.ai project.";
          } else {
            errorMessage = error.message;
          }
        }

        setState({
          isLoading: false,
          error: errorMessage,
          config: null,
          context: null,
        });
      }
    };

    initializeApp();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
