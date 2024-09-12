import React, { ReactNode, useCallback } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface ErrorBoundaryProps {
    children: ReactNode;
}

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
    const handleError = useCallback((error: Error, info: React.ErrorInfo) => {
        console.error("Uncaught error:", error, info);
    }, []);

    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={handleError}
        >
            {children}
        </ReactErrorBoundary>
    );
}

export default ErrorBoundary;