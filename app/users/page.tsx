"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Users from "./_components/users";

export default function UsersPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState<number>(1);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`https://reqres.in/api/users?page=${page}`);
        const users = (await data.json()).data as UserType[];

        setUsers((prev) => [...prev, ...users]);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    fetchData();
  }, [page]);

  return (
    <section className={styles.container}>
      <header className={styles.header}>Users</header>
      <Users users={users} />
      <button onClick={handleLoadMore} className={styles.button} type="button">
        More
      </button>
    </section>
  );
}
