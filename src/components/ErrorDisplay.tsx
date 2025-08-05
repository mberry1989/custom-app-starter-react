/**
 * Error display component with Kontent.ai styling
 */

interface ErrorDisplayProps {
  /** Error message to display */
  error: string;
  /** Optional title for the error */
  title?: string;
  /** Callback function for retry action */
  onRetry?: () => void;
}

/**
 * Error display component that matches Kontent.ai design system
 */
export function ErrorDisplay({ error, title = 'Error', onRetry }: ErrorDisplayProps) {
  const isIframeError = error.includes('must be hosted within the Kontent.ai CMS interface');
  
  return (
    <div className="card">
      <div className="alert alert-error">
        <h4 className="mb-1">{title}</h4>
        <p className="mb-2">{error}</p>
        
        {isIframeError && (
          <div className="mt-3">
            <h5>How to use this custom app:</h5>
            <ol style={{ marginLeft: '20px', marginTop: '8px' }}>
              <li>Open your Kontent.ai project</li>
              <li>Navigate to Environment settings → Custom apps</li>
              <li>Add this app with the correct URL</li>
              <li>Access the app from within the Kontent.ai interface</li>
            </ol>
            <p className="mt-2" style={{ fontSize: '14px', color: 'var(--kontent-text-color)' }}>
              💡 This app cannot run standalone - it requires the Kontent.ai context to function properly.
            </p>
          </div>
        )}
        
        {onRetry && !isIframeError && (
          <button className="btn btn-secondary" onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}