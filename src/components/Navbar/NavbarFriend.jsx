import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'


const NavbarFriend = (props) => {
    return (
        <NavLink to={`/friend/${props.id}`}>
            <div className={styles.avaFriend}>
                <img src={props.ava} />
            </div>
            <div style={{ fontSize: 12 }}>
                {props.name}
            </div>
        </NavLink>
    )
}

export default NavbarFriend