"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Users from "./_components/users";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function UsersPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch(`${BASE}/api/users?page=${page}`);
        const users = (await data.json()).data as UserType[];

        setUsers((prev) => [...prev, ...users]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <section className={styles.container}>
      <header className={styles.header}>Users</header>
      <Users users={users} />
      <button
        disabled={loading || page === 2}
        className={styles.button}
        onClick={handleLoadMore}
        type="button"
      >
        More
      </button>
    </section>
  );
}
