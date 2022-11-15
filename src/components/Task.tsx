import styles from "./Task.module.css"

import { Trash } from "phosphor-react"



export function Task() {
    return (
        <div className={styles.taskBox}>
            <div className={styles.roundCheckbox}>
                <input type="checkbox"/>
            </div>
            <div className={styles.taskContent}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Abadebabdu Aba Bassa Badubabu
            </div>

            <button title="Deletar tarefa">
                        <Trash size={20} />
            </button>


            
        </div>
    )
}