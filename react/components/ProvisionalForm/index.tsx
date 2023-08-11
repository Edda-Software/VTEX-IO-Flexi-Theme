import React from "react"
import styles from "./styles.css"

const ProvisionalForm = () => {
    return (
        <div className={styles.containerForm}>
            <form action="">
                <div className={styles.containerInput}><input type="text" placeholder="Nombre" /> <input type="number" placeholder="Teléfono" /></div>
                <div className={styles.containerInput}><input type="text" placeholder="E-mail" /> <input type="text" placeholder="Motivo de contacto" /></div>
                <div className={styles.containerTextarea}><textarea name="" placeholder="Mensaje"></textarea></div>
                <input className={styles.bottonInput} type="submit" value="Contactar" />
            </form>
        </div>
    )
}

export default ProvisionalForm