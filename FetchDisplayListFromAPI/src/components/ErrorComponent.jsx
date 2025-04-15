import styles from "./errorcomponent.module.css";

// Error Component
export default function ErrorComponent({ error }) {
  return (
    <>
      {error && (
        <div className={styles.errorContainer}>
          <p className={styles.errorText}>⚠️ Error: {error}</p>
        </div>
      )}
    </>
  );
}
