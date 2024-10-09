import React from "react";
import styles from "../styles.module.css";

type Props = {
  loading: boolean;
  page: number;
  handleLoadMore: () => void;
};

export default function LoadMore({ page, handleLoadMore, loading }: Props) {
  return (
    <button
      disabled={loading || page === 2}
      className={styles.button}
      onClick={handleLoadMore}
      type="button"
    >
      More
    </button>
  );
}
