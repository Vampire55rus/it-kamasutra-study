import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import NavbarFriend from './NavbarFriend'

const Navbar = (props) => {
    return (<nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to={`/`} className={({ isActive }) => isActive ? styles.active : undefined}>
                <img alt='Иконка' src='https://avatars.akamai.steamstatic.com/706eb10257b23c3a4175fceeebc89e0be53b31b7_medium.jpg' />
                Профиль
            </NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to={`/dialogs`} className={({ isActive }) => isActive ? styles.active : undefined}>Сообщения</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to={`/news`} className={({ isActive }) => isActive ? styles.active : undefined}>Новости</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to={`/music`} className={({ isActive }) => isActive ? styles.active : undefined}>Музыка</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to={`/settings`} className={({ isActive }) => isActive ? styles.active : undefined}>Настройки</NavLink>
        </div>
        <div className={`${styles.item} ${styles.friends}`}>
            <NavLink to={`/friends`} className={({ isActive }) => isActive ? styles.active : undefined}>Друзья</NavLink>
            <div className={styles.friendsContainer}>
                <NavbarFriend name='Серёга' ava='https://avatars.akamai.steamstatic.com/706eb10257b23c3a4175fceeebc89e0be53b31b7_medium.jpg' id='1'/>
                <NavbarFriend name='Валера' ava='https://avatars.akamai.steamstatic.com/706eb10257b23c3a4175fceeebc89e0be53b31b7_medium.jpg' id='2'/>
                <NavbarFriend name='Катя' ava='https://avatars.akamai.steamstatic.com/706eb10257b23c3a4175fceeebc89e0be53b31b7_medium.jpg' id='3'/>
            </div>
        </div>
    </nav>)
}

export default Navbar