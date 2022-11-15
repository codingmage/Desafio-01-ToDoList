import styles from "./EmptyTasklist.module.css"
import clipboard from "../assets/clipboard.svg"

export function EmptyTasklist() {
    return (
        <div className={styles.noTasks}>
            <main>
                <img src={clipboard} />
                <div className={styles.emptyText}>
                    <p>Você ainda não tem tarefas cadastradas.</p>
                    <p>Crie tarefas e organize seus items a fazer.</p>
                </div>

            </main>
        </div>
    )
}