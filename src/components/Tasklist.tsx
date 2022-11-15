import styles from "./Tasklist.module.css"
import { Task } from "./Task"
import { EmptyTasklist } from "./EmptyTasklist"

export function Tasklist() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.taskInfo}>
                <div className={styles.createdTasks}>Tarefas criadas
                    <span className={styles.createdTasksCounter}>0</span>
                </div> 
                <div className={styles.completedTasks}>Concluídas
                    <span className={styles.completedTasksCounter}>
                        0 de 5
                    </span>
                </div>
            </div>

            <div className={styles.taskDisplay}>
                <EmptyTasklist />
            </div>
            
        </div>
    )
}