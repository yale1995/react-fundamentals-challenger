import { ClipboardText } from 'phosphor-react'
import styles from './task-list-empty.module.css'

export function TaskListEmpty() {
  return (
    <div className={styles.container}>
      <ClipboardText size={56} color='#808080'/>
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}