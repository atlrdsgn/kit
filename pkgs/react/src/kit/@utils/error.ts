import { useState, useCallback } from 'react';

// Custom hook to handle errors
const useErrorHandler = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((err: unknown) => {
    // Check if 'err' is an instance of Error
    if (err instanceof Error) {
      // If it's an Error, use its message
      setError(`Failed to copy text: ${err.message}`);
    } else {
      // For other types or if 'err' is not an Error object
      setError('An unexpected error occurred.');
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
};

function isError(error: unknown): error is { message: string } {
  return error !== null && typeof error === 'object' && 'message' in error;
}

export { useErrorHandler };
export { isError };
