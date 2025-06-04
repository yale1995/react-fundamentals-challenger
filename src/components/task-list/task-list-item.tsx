import { Check, Trash } from "phosphor-react";
import styles from "./task-list-item.module.css";

export type Task = {
  id: number;
  text: string;
  isChecked: boolean;
};

interface TaskListItemProps {
  data: Task;
  onDelete: (taskId: number) => void;
  onToggleStatus: (taskId: number) => void;
}

export const TaskListItem = ({
  data,
  onDelete,
  onToggleStatus,
}: TaskListItemProps) => {
  function handleDelete() {
    onDelete(data.id);
  }

  function handleToggleStatus() {
    onToggleStatus(data?.id);
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const paragraphCheckedClassname = data.isChecked
    ? styles["paragraph-checked"]
    : "";

  return (
    <li className={styles.taskListItem}>
      <div>
        <label htmlFor="checkbox" onClick={handleToggleStatus}>
          <input type="checkbox" />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} color="#fff" />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleDelete}>
        <Trash size={16} />
      </button>
    </li>
  );
};
