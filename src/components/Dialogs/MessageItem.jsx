import styles from './Dialogs.module.css'

const MessageItem = (props)=>{
    return(
        <div className={styles.message}>{props.msg}</div>
    )
}
export default MessageItem