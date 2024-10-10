import styles from "../styles.module.css";
import CardLoading from "./cardLoading";
import UserCard from "./userCard";

type Props = {
  users: UserType[];
  loading: boolean;
};

export default function Users({ users, loading }: Props) {
  return (
    <ul className={styles.card_container}>
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
      {loading ? <CardLoading /> : null}
    </ul>
  );
}
