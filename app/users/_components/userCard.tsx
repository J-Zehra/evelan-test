import Image from "next/image";
import styles from "../styles.module.css";

type Props = {
  user: UserType;
};

export default function UserCard({ user }: Props) {
  return (
    <li>
      <article className={styles.card}>
        <picture>
          <source
            media="(max-width:100px)"
            srcSet={user.avatar}
            type="image/webp"
          />
          <source
            media="(max-width:130px)"
            srcSet={user.avatar}
            type="image/webp"
          />{" "}
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={30}
            height={40}
            sizes="100vw"
            priority={false}
            className={styles.avatar}
          />
        </picture>

        <h1 className={styles.user_id}>{user.id}</h1>
        <h1
          className={styles.user_name}
        >{`${user.first_name} ${user.last_name}`}</h1>
        <p className={styles.user_email}>{user.email}</p>
      </article>
    </li>
  );
}
