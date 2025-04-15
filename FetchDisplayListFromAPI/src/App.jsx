import DogComponent from "./components/DogComponent";
import styles from "./app.module.css";
export default function App() {
  return (
    // Main App component
    <div className={styles.app}>
      {/* App Title */}
      <h1>🐶 Dog Breed Explorer</h1>
      <DogComponent />
    </div>
  );
}
