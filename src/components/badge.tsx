import type { ReactNode } from "react";
import styles from "./badge.module.css";

interface BadgeProps {
  children: ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
  return <span className={styles.badge}>{children}</span>;
};
