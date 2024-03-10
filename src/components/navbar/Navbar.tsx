
import Link from "next/link"
import Menu from "../menu/Menu"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>

      {/* LINKS */}
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* LOGO */}
      <div className={styles.logo}>
        <Link href="/">
          Bistro Pro
        </Link>
      </div>

      {/* MENU FOR SMALL SCREEN*/}
      <div className={styles.menu}>
        <Menu />
      </div>

    </div>
  )
}

export default Navbar