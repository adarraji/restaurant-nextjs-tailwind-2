import { MenuType } from "@/types/types"
import s from "./menu.module.css"
import Link from "next/link"

const getData = async () => {
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/api/categories`, { cache: "no-store" })
    if (!res.ok) {
        throw new Error("Failed!")
    }
    return res.json()
}

const MenuPage = async () => {
    const menu: MenuType = await getData()    
    return (
        <div className={s.container}>
            {menu.map(category => (
                <Link href={`/menu/${category.slug}`} key={category.id} className={s.link} style={{ backgroundImage: `url(${category.img})` }}>
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className={s.header}>{category.title}</h1>
                        <p className={s.desc}>{category.desc}</p>
                        <button className={`hidden 2xl:block py-2 px-4 rounded-md ${category.color === "black" ? "bg-black text-white" : "bg-white text-red-500"}`}>
                            Explore
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage