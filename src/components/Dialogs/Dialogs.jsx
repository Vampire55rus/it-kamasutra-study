import styles from './Dialogs.module.css'


const Dialogs = () => {
    return (<>
        <div className={styles.dialogs}>
            <div className={styles.dialog_item}>
                <div className={`${styles.dialog} ${styles.header}`}>Диалоги</div>
                <div className={`${styles.dialog} ${styles.active}`}>Пользователь 1</div>
                <div className={styles.dialog}>Пользователь 2</div>
                <div className={styles.dialog}>Пользователь 3</div>
                <div className={styles.dialog}>Пользователь 4</div>
                <div className={styles.dialog}>Пользователь 5</div>
            </div>
            <div className={styles.messages}>
                <div className={`${styles.message} ${styles.header}`}>Сообщения</div>
                <div className={styles.message}>Сообщение номер 1</div>
                <div className={styles.message}>Сообщение номер 2</div>
                <div className={styles.message}>Сообщение номер 3</div>
            </div>
        </div>
    </>)
}

export default Dialogs