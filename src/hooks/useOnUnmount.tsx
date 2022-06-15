import { useEffect } from 'react';

const useOnUnmount = (fn: () => void): void => {
  useEffect(() => {
    return () => {
      fn();
    };
  }, [fn]);
};

export default useOnUnmount;
