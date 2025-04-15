import useFetch from "./useFetch";
import DogLists from "./DogLists";
import ErrorComponent from "./ErrorComponent";
import styles from "./dogcomponent.module.css";

// The dog component showing the dog list, loading and a pending elements
export default function DogComponent() {
  const {
    data: dogs,
    isPending,
    error,
    isDone,
  } = useFetch("https://dog.ceo/api/breeds/list/all");
  return (
    <div className={styles.dog}>
      {isPending ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        !error && <DogLists dogs={dogs} />
      )}
      {isDone && error && <ErrorComponent error={error} />}
    </div>
  );
}
