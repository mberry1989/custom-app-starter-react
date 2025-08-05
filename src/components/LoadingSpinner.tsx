/**
 * Loading spinner component with Kontent.ai styling
 */

interface LoadingSpinnerProps {
  /** Custom message to display below the spinner */
  message?: string;
  /** Size of the spinner (small, medium, large) */
  size?: "small" | "medium" | "large";
}

/**
 * Loading spinner component that matches Kontent.ai design system
 */
export function LoadingSpinner({ message = "Loading...", size = "medium" }: LoadingSpinnerProps) {
  const sizeClass = `spinner-${size}`;

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ padding: "32px" }}
    >
      <div className={`spinner ${sizeClass}`}></div>
      {message && (
        <p style={{ marginTop: "16px", color: "var(--kontent-text-color)", fontSize: "14px" }}>
          {message}
        </p>
      )}
    </div>
  );
}
