import styles from "../styles.module.css";
import UserCard from "./userCard";

type Props = {
  users: UserType[];
};

export default function Users({ users }: Props) {
  return (
    <ul className={styles.card_container}>
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </ul>
  );
}
