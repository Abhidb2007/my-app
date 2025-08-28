import { useState, useEffect, useRef } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (!url) return;

    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    setLoading(true);
    setError(null);

    fetch(url, { ...options, signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      // Abort fetch on component unmount
      abortControllerRef.current.abort();
    };
  }, [url]);

  return { data, loading, error };
}
