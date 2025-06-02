import { Badge } from "@/components/badge";
import styles from "./task-list-header.module.css";

interface TaskListHeaderProps {
  tasksCount: number;
  doneTasksCount: number;
}

export const TaskListHeader = ({
  doneTasksCount,
  tasksCount,
}: TaskListHeaderProps) => {
  return (
    <header className={styles.taskListHeader}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p> <Badge>{tasksCount}</Badge>
      </div>
      <div className={styles.finishedTasks}>
        <p>Tarefas criadas</p> <Badge>{`${doneTasksCount} de ${tasksCount}`}</Badge>
      </div>
    </header>
  );
};
