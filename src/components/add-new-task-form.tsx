import { PlusCircle } from "phosphor-react";
import { Button } from "./button";
import { Input } from "./input";
import styles from "./add-new-task-form.module.css";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type InvalidEvent,
} from "react";

interface AddNewTaskFormProps {
  onSubmit: (task: string) => void;
}

export const AddNewTaskForm = ({ onSubmit }: AddNewTaskFormProps) => {
  const [newTask, setNewTask] = useState("");

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    onSubmit(newTask);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value);
  }

  function handleNewInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este é um campo obrigatório");
  }

  return (
    <form className={styles.form} onSubmit={handleAddNewTask}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleNewInvalidTask}
        required
      />
      <Button type="submit">
        Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </Button>
    </form>
  );
};
