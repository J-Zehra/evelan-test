import React from "react";
import styles from "../styles.module.css";

type Props = {
  handleLoadMore: () => void;
  page: number;
};

export default function LoadMore({ handleLoadMore, page }: Props) {
  return (
    <button
      className={styles.button}
      disabled={page === 2}
      onClick={handleLoadMore}
      type="button"
    >
      More
    </button>
  );
}
