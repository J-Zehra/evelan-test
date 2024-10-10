import styles from "../styles.module.css";

export default function CardLoading() {
  return [1, 0.8, 0.5].map((item) => {
    return (
      <div
        key={item}
        style={{ opacity: item }}
        className={styles.card_loading}
      />
    );
  });
}
