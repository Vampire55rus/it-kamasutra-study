import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem'
import MessageItem from './MessageItem'

const Dialogs = (props) => {
    return (<>
        <div className={styles.dialogs}>
            <div className={styles.dialog_item}>
                <div className={`${styles.dialog} ${styles.header}`}>Диалоги</div>
                {props.state.aDialogs.map(item => <DialogItem name={item.name} id={item.id} icon={item.icon} />)}
            </div >
            <div className={styles.messages}>
                <div className={`${styles.message} ${styles.header}`}>Сообщения</div>
                {props.state.aMessages.map(item=><MessageItem msg={item.msg} />)}
            </div>
        </div >
    </>)
}

export default Dialogs