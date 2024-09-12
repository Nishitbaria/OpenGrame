import React, { ReactNode, useState, useCallback } from 'react';
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
    const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

    const handleError = useCallback((error: Error, info: React.ErrorInfo) => {
        console.error("Uncaught error:", error, info);
        setErrorInfo(info);
    }, []);

    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={handleError}
            onReset={() => setErrorInfo(null)}
        >
            {children}
        </ReactErrorBoundary>
    );
}

export default ErrorBoundary;