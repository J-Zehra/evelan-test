import { useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function useFetchUsers(initialUsers: UserType[]) {
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [page, setPage] = useState(1);
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

  return {
    users,
    loading,
    page,
    handleLoadMore,
  };
}
