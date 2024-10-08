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
          width={20}
          height={20}
          sizes="5rem"
          priority={false}
          className={styles.avatar}
        />
        <h1 className={styles.user_id}>{user.id}</h1>
        <h1
          className={styles.user_name}
        >{`${user.first_name} ${user.last_name}`}</h1>
        <p className={styles.user_email}>{user.email}</p>
      </article>
    </li>
  );
}
