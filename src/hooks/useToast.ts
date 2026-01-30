import { useState, useCallback, useEffect } from 'react';

/**
 * Hook to manage toast notifications
 */
export function useToast(duration: number = 3000) {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), duration);
      return () => clearTimeout(timer);
    }
  }, [toast, duration]);

  const showToast = useCallback((message: string) => {
    setToast(message);
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
}
