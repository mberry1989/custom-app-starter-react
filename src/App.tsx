/**
 * Root App component with error boundary and context providers
 */

import { useContext } from 'react';
import { CustomAppProvider, CustomAppContext } from './components/CustomAppProvider';
import { IntegrationApp } from './IntegrationApp';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';

/**
 * Inner app component that handles different states
 */
function AppContent() {
  const appState = useContext(CustomAppContext);

  if (!appState) {
    return <ErrorDisplay error="Custom app context not available" />;
  }

  if (appState.isLoading) {
    return <LoadingSpinner message="Connecting to Kontent.ai..." />;
  }

  if (appState.error) {
    const isIframeError = appState.error.includes('must be hosted within the Kontent.ai CMS interface');
    const title = isIframeError ? 'App Not Running in Kontent.ai' : 'Failed to Initialize Custom App';
    const onRetry = isIframeError ? undefined : () => window.location.reload();
    
    return (
      <ErrorDisplay 
        error={appState.error} 
        title={title}
        onRetry={onRetry}
      />
    );
  }

  return <IntegrationApp />;
}

/**
 * Root App component with providers and error handling
 */
export function App() {
  return (
    <CustomAppProvider>
      <AppContent />
    </CustomAppProvider>
  );
}