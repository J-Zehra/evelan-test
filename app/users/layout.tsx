import styles from "./styles.module.css";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.layout}>{children}</div>;
}
