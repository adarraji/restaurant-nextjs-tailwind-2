import Link from "next/link"
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.link}>Bistro Pro</Link>
            <p>ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footer