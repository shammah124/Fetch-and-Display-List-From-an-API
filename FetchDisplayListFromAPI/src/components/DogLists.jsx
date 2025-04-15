import styles from "./doglists.module.css";
// The dog list component mapping the data gotten from the API
export default function DogLists({ dogs }) {
  return (
    <div className={styles.dogLists}>
      <ul className={styles.dogContainer}>
        {dogs &&
          dogs.map((dog, index) => <li key={index}>{dog.toUpperCase()}</li>)}
      </ul>
    </div>
  );
}
