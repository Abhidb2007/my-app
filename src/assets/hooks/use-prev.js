import { useEffect, useRef } from "react";

export function usePrev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // update ref whenever value changes
  }, [value]);

  return ref.current; // previous value (before update)
}
