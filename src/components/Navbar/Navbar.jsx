import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'


export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.links}>
                <li>
                    <NavLink to="/" className={navData => navData.isActive ? styles.active : styles.item}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/time" className={navData => navData.isActive ? styles.active : styles.item}>Time Converter</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={navData => navData.isActive ? styles.active : styles.item}>???</NavLink>
                </li>
            </ul>
        </div>
    )
}