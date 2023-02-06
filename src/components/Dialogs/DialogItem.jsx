import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className={styles.item}>
            <img alt='Икнока' src={props.icon} />
            <NavLink to={`/dialogs/${props.id}`} className={({ isActive }) => isActive ? `${styles.active}` : undefined}>{props.name}</NavLink>
        </div>)
}
export default DialogItem