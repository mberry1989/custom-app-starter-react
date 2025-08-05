/**
 * Type definitions for Kontent.ai Custom App SDK integration
 */

/**
 * User role information from Kontent.ai
 */
export interface UserRole {
  /** Role ID */
  readonly id: string;
  /** Role codename - applicable only for the Project manager role */
  readonly codename?: string | null;
}

/**
 * Context data provided by Kontent.ai application
 */
export interface AppContext {
  /** Environment ID */
  environmentId: string;
  /** Current user's ID */
  userId: string;
  /** Current user's email */
  userEmail: string;
  /** Array of user roles in the environment */
  userRoles: readonly UserRole[];
}

/**
 * Custom app configuration interface
 * 
 * Contains configuration values passed from Kontent.ai when your app is initialized.
 * The structure depends on what you configure in the Kontent.ai interface.
 */
export interface AppConfig {
  [key: string]: unknown;
}

/**
 * Custom app state interface
 */
export interface CustomAppState {
  /** Whether the app is loading */
  isLoading: boolean;
  /** Error state */
  error: string | null;
  /** App configuration */
  config: AppConfig | null;
  /** Kontent.ai context */
  context: AppContext | null;
}



