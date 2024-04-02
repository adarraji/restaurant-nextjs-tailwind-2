
import Link from "next/link"
import Menu from "../menu/Menu"
import styles from "./navbar.module.css"
import CartIcon from "../cartIcon/CartIcon"
import Image from "next/image"
import UserLinks from "../userLinks/UserLinks"

const Navbar = () => {

  

  return (
    <div className={styles.navbar}>

      {/* LEFT LINKS */}
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

      {/* RIGHT LINKS */}
      <div className={`${styles.links} ${styles.right_links}`}>
        <div className={styles.phone}>
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 789</span>
        </div>
       <UserLinks/>
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>

    </div>
  )
}

export default Navbar