/**
 * Main integration app component
 *
 * This is where you'll build your custom app functionality.
 * The example below shows how to access information from Kontent.ai.
 *
 * Available hooks:
 * - useConfig() - Get app configuration
 * - useEnvironmentId() - Get current environment ID
 * - useUserInfo() - Get current user info (ID and email)
 * - useUserRoles() - Get current user's roles
 * - useCustomAppContext() - Get full app state
 */

import { useConfig, useEnvironmentId } from "./hooks";

/**
 * Main application component that demonstrates basic Custom App SDK usage
 */
export function IntegrationApp() {
  const config = useConfig();
  const environmentId = useEnvironmentId();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {/* Replace this content with your custom app UI */}
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">My Custom App</h1>
        </div>

        <p>Welcome to your custom app!</p>

        <div className="alert alert-success">
          <strong>✅ Connected to Kontent.ai</strong>
          <br />
          Environment: <code>{environmentId}</code>
        </div>

        <div className="alert alert-warning">
          <strong>🚀 Ready to customize!</strong>
          <br />
          Edit <code>src/IntegrationApp.tsx</code> to build your app.
        </div>

        {/* Example: Display configuration */}
        {config && Object.keys(config).length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h3>App Configuration</h3>
            <pre
              style={{
                background: "#f5f5f5",
                padding: "12px",
                borderRadius: "4px",
                fontSize: "12px",
                overflow: "auto",
              }}
            >
              {JSON.stringify(config, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
