import styles from './SocialeMenu.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function SocialeMenu() {
    return (
         <ul className={styles.sociale}>
          <li className={styles['item-icons']}>
            <a className={styles['icon-link']} href="#">
             <FaInstagram />
            </a>
          </li>
          <li className={styles['item-icons']}>
            <a className={styles['icon-link']} href="https://www.facebook.com/share/19S5vEfiqo/" target="_blank">
             <FaFacebook />
            </a>
          </li>
          <li className={styles['item-icons']}>
            <a className={styles['icon-link']} href="#">
             <FaLinkedin />
            </a>
          </li>
        </ul>
    );
}