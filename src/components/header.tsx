import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="app logo" />
    </header>
  );
};
