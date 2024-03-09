
import Link from "next/link"
import Menu from "../menu/Menu"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>

      {/* LOGO */}
      <div className={styles.logo}>
        <Link href="/">
          Bistro Pro
        </Link>
      </div>

      {/* MENU */}
      <div className={styles.logo}>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar