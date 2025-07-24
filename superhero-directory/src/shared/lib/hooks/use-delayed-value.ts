import { useEffect, useState } from 'react';

export const useDelayedValue = <T,>(value: T, delay = 500): T => {
  const [delayedValue, setDelayedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, value]);

  return delayedValue;
};
