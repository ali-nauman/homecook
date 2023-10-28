import { useState, useEffect } from 'react';

export function useToast() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (showToast) {
      timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 1500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showToast]);

  return { showToast, setShowToast };
}
