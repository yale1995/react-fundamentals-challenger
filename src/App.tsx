import { AddNewTaskForm } from "./components/add-new-task-form";
import { Header } from "./components/header";
import { useState } from "react";
import styles from './app.module.css'

export const App = () => {
  const [tasks, setTasks] = useState([''])

  function handleAddNewTask(newTask: string){
    setTasks(state => [...state, newTask])
  }

  return (
    <main>
      <Header />
      
      <section className={styles.wrapper}>
        <AddNewTaskForm onSubmit={handleAddNewTask}/>
      </section>
    </main>
  );
};
