import useFetch from "./useFetch";
import DogLists from "./DogLists";
import ErrorComponent from "./ErrorComponent";
import styles from "./dogcomponent.module.css";
import { useState } from "react";

// The dog component showing the dog list, loading and a pending elements
export default function DogComponent() {
  const {
    data: dogs,
    isPending,
    error,
    isDone,
  } = useFetch("https://dog.ceo/api/breeds/list/all");

  // New: limit to 25 breeds initially and load more on click
  const [visibleCount, setVisibleCount] = useState(25);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 25);
  };

  const visibleDogs = dogs?.slice(0, visibleCount);

  return (
    <div className={styles.dog}>
      {isPending ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        !error && (
          <>
            <DogLists dogs={visibleDogs} />
            {dogs?.length > visibleCount && (
              <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
                Load More
              </button>
            )}
          </>
        )
      )}
      {isDone && error && <ErrorComponent error={error} />}
    </div>
  );
}
