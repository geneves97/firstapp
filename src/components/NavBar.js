import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import {FcCommandLine} from "react-icons/fc"

function NavBar(){
  return(<div>
    
    <ul className={styles.list}>
        <li className={styles.item}>
          <FcCommandLine />
        </li>
        <li className={styles.item}>
          <Link to="/"><p>Home</p></Link>
        </li>
        <li className={styles.item}>
          <Link to="/empresa"><p>Empresa</p></Link>
        </li>
        <li className={styles.item}>
          <Link to="/contato"><p>Contato</p></Link>
        </li>
      </ul>
      </div>
  )
}

export default NavBar