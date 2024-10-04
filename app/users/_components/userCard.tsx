import Image from "next/image";
import styles from "../styles.module.css";

type Props = {
  user: UserType;
};

export default function UserCard({ user }: Props) {
  return (
    <li>
      <article className={styles.card}>
        <Image
          src={user.avatar}
          alt="User Avatar"
          width={100}
          height={500}
          className={styles.avatar}
        />
        <h1 className={styles.user_id}>{user.id}</h1>
        <h3
          className={styles.user_name}
        >{`${user.first_name} ${user.last_name}`}</h3>
        <h5 className={styles.user_email}>{user.email}</h5>
      </article>
    </li>
  );
}
