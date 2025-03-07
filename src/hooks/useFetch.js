import { useState, useEffect } from "react";

// 커스텀 훅 생성
export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch user's places.",
        });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);

  return { isFetching, error, fetchedData, setFetchedData };
}
