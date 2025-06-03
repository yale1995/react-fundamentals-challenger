import { Check, Trash } from "phosphor-react";
import styles from "./task-list-item.module.css";

export type Task = {
  id: number;
  text: string;
  isChecked: boolean;
};

interface TaskListItemProps {
  data: Task;
  onDeleteTask: (taskId: number) => void
}

export const TaskListItem = ({ data, onDeleteTask }: TaskListItemProps) => {
  
  function handleDeleteTask() {
    onDeleteTask(data.id)
  }


    const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']


  const paragraphCheckedClassname = data.isChecked
    ? styles['paragraph-checked']
    : ''

  return (
    <li className={styles.taskListItem}>
      <div>
        <label>
          <input type="checkbox" />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleDeleteTask}>
        <Trash size={16}  />
      </button>
    </li>
  );
};
