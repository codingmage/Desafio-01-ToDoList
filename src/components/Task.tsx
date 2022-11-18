import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

interface TaskProps {
    id: string,
    content: string;
    isComplete: boolean;
    onDeleteTask: (taskID: string) => void;
    task?: any;
    onChange: any
}


export function Task({
    id, 
    content, 
    isComplete, 
    onDeleteTask,
    onChange,
    task}: TaskProps) {

function deleteTask() {
    onDeleteTask(id)
}

    return (
        <div className={styles.taskBox}>
            <div className={styles.roundCheckbox}>
                <input 
                type="checkbox"
                checked={isComplete}
                onChange={event => {
                    onChange({
                        ...task,
                        isComplete: event.target.checked
                    })
                }}
                />
            </div>
            <div className={isComplete? styles.finishedTask : styles.taskContent} >
                <p>
                    {content}
                </p>
            </div>

            <button title="Deletar tarefa" onClick={deleteTask}>
                        <Trash size={20} />
            </button>


            
        </div>
    )
}