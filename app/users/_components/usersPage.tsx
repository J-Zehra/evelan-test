"use client";

import Users from "./users";
import LoadMore from "./loadMore";
import styles from "../styles.module.css";
import useFetchUsers from "@/app/_hooks/useFetchUsers";

type Props = {
  initialUsers: UserType[];
};

export default function UsersPage({ initialUsers }: Props) {
  const { users, page, handleLoadMore, loading } = useFetchUsers(initialUsers);

  return (
    <section className={styles.container}>
      <header className={styles.header}>Users</header>
      <Users users={users} loading={loading} />
      <LoadMore handleLoadMore={handleLoadMore} page={page} />
    </section>
  );
}
