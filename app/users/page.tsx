import UsersPage from "./_components/usersPage";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function Page() {
  const data = await fetch(`${BASE}/api/users?page=1`);
  const initialUsers = (await data.json()).data as UserType[];

  return <UsersPage initialUsers={initialUsers} />;
}
