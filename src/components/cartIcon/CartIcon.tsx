import styles from "./cartIcon.module.css"
import Image from "next/image"

const CartIcon = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image src="/cart.png" alt="" sizes="32px" fill/>
            </div>
            <span>Cart {3}</span>
        </div>
    )
}

export default CartIcon