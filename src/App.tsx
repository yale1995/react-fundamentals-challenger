import styles from "./app.module.css";

import { AddNewTaskForm } from "./components/add-new-task-form";
import { Header } from "./components/header";
import { useState } from "react";
import { TaskListHeader } from "./components/task-list/task-list-header";

export const App = () => {
  const [tasks, setTasks] = useState([""]);

  function handleAddNewTask(newTask: string) {
    setTasks((state) => [...state, newTask]);
  }

  return (
    <main>
      <Header />

      <section className={styles.wrapper}>
        <AddNewTaskForm onSubmit={handleAddNewTask} />

        <div className={styles.taskList}>
          <TaskListHeader tasksCount={5} doneTasksCount={2} />
        </div>
      </section>
    </main>
  );
};
