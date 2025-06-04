import styles from "./app.module.css";

import { AddNewTaskForm } from "./components/add-new-task-form";
import { Header } from "./components/header";
import { useState } from "react";
import { TaskListHeader } from "./components/task-list/task-list-header";
import { TaskListItem, type Task } from "./components/task-list/task-list-item";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddNewTask(newTaskText: string) {
    if (!newTaskText) {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      text: newTaskText,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
  }


  function deleteTask(removedTaskId: number) {
    const remainingTasks = tasks.filter(task => task.id !== removedTaskId)
    setTasks(remainingTasks)
  }


  const checkedTasksCount = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  return (
    <main>
      <Header />

      <section className={styles.wrapper}>
        <AddNewTaskForm onSubmit={handleAddNewTask} />

        <div className={styles.container}>
          <TaskListHeader tasksCount={tasks.length} doneTasksCount={checkedTasksCount} />

          <ul className={styles.taskList}>
            {tasks.map((task) => (
              <TaskListItem key={task.id} data={task} onDeleteTask={deleteTask}/>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
