"use client";

import styles from "./styles.module.css";
import Users from "./_components/users";
import useFetchUsers from "../_hooks/useFetchUsers";
import LoadMore from "./_components/loadMore";

export default function UsersPage() {
  const { users, page, loading, handleLoadMore } = useFetchUsers();

  return (
    <section className={styles.container}>
      <header className={styles.header}>Users</header>
      <Users users={users} />
      <LoadMore page={page} loading={loading} handleLoadMore={handleLoadMore} />
    </section>
  );
}
