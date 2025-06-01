import styles from './button.module.css'
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<'button'>

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button className={styles.button} {...props}>{children}</button>;
};
