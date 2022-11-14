import styles from "./Taskbar.module.css"

import plus from "../assets/plus.svg"

export function Taskbar() {
    return (
        <form className={styles.taskbar}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">Criar<img src={plus}/></button>

        </form>
    )
}