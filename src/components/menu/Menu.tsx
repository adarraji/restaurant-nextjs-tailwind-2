"use client"

import Image from "next/image"
import styles from "./menu.module.css"
import { useState } from "react"
import Link from "next/link";
import CartIcon from "../cartIcon/CartIcon";

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    // TEMPORARY
    const user = false

    return (
        <div>
            {
                !isOpen
                    ? <Image src="/open.png" alt="" width={0} height={0} sizes="20px" className={styles.cart_open_image} onClick={() => setIsOpen(true)} />
                    : <Image src="/close.png" alt="" width={0} height={0} sizes="20px" className={styles.cart_open_image}  onClick={() => setIsOpen(false)} />
            }
            {isOpen
                && <div className={styles.links}>
                    {
                        links.map(item => (
                            <Link href={item.url} key={item.id} onClick={() => setIsOpen(false)}>
                                {item.title}
                            </Link>
                        ))
                    }
                    {
                        !user
                            ? <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
                            : <Link href="/orders" onClick={() => setIsOpen(false)}>Orders</Link>
                    }
                    <Link href="/cart" onClick={() => setIsOpen(false)}>
                        <CartIcon />
                    </Link>
                </div>
            }
        </div>
    )
}

export default Menu