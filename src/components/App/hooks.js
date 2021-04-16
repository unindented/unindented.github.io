import { useCallback, useRef } from "react";

export const usePreloadCallback = (loadQuery) => {
  const isPreloading = useRef(false);

  return useCallback(() => {
    requestIdleCallback(() => {
      if (!isPreloading.current) {
        isPreloading.current = true;
        loadQuery();
      }
    });
  }, [loadQuery]);
};
