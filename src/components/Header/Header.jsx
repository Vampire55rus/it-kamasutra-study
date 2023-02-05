import logo from '../../logo.svg'
import styles from './Header.module.css'

const Header = () => {
    return (<header className={styles.header}>
        <img alt='Картинка' src={logo} /></header>)
}

export default Header