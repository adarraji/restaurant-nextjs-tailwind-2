"use client"
import styles from "./cartIcon.module.css"
import Image from "next/image"
import { useSelector } from "react-redux";
import { selectTotalItems } from "@/store/cart/cart.selector"

const CartIcon = () => {
    const totalItems = useSelector(selectTotalItems)
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image src="/cart.png" alt="" sizes="32px" fill />
            </div>
            <span>Cart {totalItems}</span>
        </div>
    )
}

export default CartIcon