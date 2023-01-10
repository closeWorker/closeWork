import React, { useRef, useEffect } from "react";

export const useOutClick = (callback: () => void) => {
  const ref = useRef(null);

  useEffect(() => {
    function modalOutClick(event: any) {
      const target = event.target;
      const element: any = ref.current;

      if (!element.contains(target)) {
        callback();
      }
    }
    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);

  return ref;
};
