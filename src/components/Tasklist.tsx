import styles from "./Tasklist.module.css"
import { Task } from "./Task"
import { EmptyTasklist } from "./EmptyTasklist"
import plus from "../assets/plus.svg"
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface TaskProps {
    id: string,
    content: string,
    isComplete: boolean
}

export function Tasklist() {

const [tasks, setTasks] = useState<TaskProps[]>([])
const [newTaskText, setNewTaskText] = useState('')

const isEmpty = tasks.length === 0

const zeroTasks = "0"

const isNewTaskEmpty = newTaskText.length === 0

const completedTasks = tasks.filter(task => task.isComplete).length

const nonZeroTasks = `${completedTasks} de ${tasks.length}`

const hasTasks =  tasks.map(task => {
    return <Task
    task={task} 
    id={task.id}
    key={task.id}
    content={task.content} 
    isComplete={task.isComplete}
    onDeleteTask={HandleDeleteTask}
    onChange={handleChangeTask}
    />
})

function handleChangeTask(task: any) {

    setTasks( tasks.map(taskComplete => {
        if (taskComplete.id === task.id) {
          return task;
        } else {
          return taskComplete;
        }
      })
    );
  }

function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()

    const newTask = {
        id: uuidv4(),
        content: event?.target.task.value,
        isComplete: false}


    setTasks([...tasks, newTask]);
    setNewTaskText('');

}

function handleNewTaskChange(event: FormEvent) {
    setNewTaskText(event.target.value)
}

function HandleDeleteTask(taskID: string){
    const filterTasks = tasks.filter(taskKey => {
        return taskKey.id !== taskID
    });

    setTasks(filterTasks)
}


    return (
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.taskbar}>

                <input 
                name="task"
                type="text" 
                placeholder="Adicione uma nova tarefa"
                value={newTaskText} 
                onChange={handleNewTaskChange}
                />
                <button type="submit" disabled={isNewTaskEmpty}>Criar<img src={plus} /></button>

            </form>
            <div className={styles.wrapper}>
                <div className={styles.taskInfo}>
                    <div className={styles.createdTasks}>Tarefas criadas
                        <span className={styles.createdTasksCounter}>{tasks.length}</span>
                    </div>
                    <div className={styles.completedTasks}>Concluídas
                        <span className={styles.completedTasksCounter}>
                            {isEmpty ? zeroTasks : nonZeroTasks}
                        </span>
                    </div>
                </div>

                <div className={styles.taskDisplay}>
                    {isEmpty ? <EmptyTasklist/> : hasTasks}
                </div>

            </div>
        </div>

    )
}