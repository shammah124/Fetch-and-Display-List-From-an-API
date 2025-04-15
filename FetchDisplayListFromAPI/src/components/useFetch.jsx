import { useState, useEffect } from "react";
// This is a custom useFetch hook created to fetch data from API's
export default function useFetch(url) {
  // Creating and using useState hook
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isDone, setIsDone] = useState(false);
  // Making use of useEffect hook to fetch data from any API
  useEffect(() => {
    // Used for useEffect cleanup
    const controller = new AbortController();
    // Async await promise to fetch data
    async function fetchData() {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (response.status === 404) {
          throw new Error("Sorry, The Page Could Not be Accessed(404)");
        } else if (response.status === 500) {
          throw new Error("Server Error Has Occurred (500)");
        } else if (!response.ok) throw new Error("Unable to reach server");
        const data = await response.json();
        setData(Object.keys(data.message).splice(1, 25));
        setIsPending(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      } finally {
        setIsDone(true);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  // Returning the useState states
  return { data, isPending, error, isDone };
}
