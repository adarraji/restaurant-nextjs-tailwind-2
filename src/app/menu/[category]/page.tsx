import Link from "next/link"
import s from "./category.module.css"
import Image from "next/image"
import { ProductType } from "@/types/types"



const getData = async (category: string) => {
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/api/products?cat=${category}`, { cache: "no-store" })
    if (!res.ok) {
        throw new Error("Failed!")
    }
    return res.json()
}


type CategoryPageProps = {
    params: {
        category: string
    }
}

const CategoryPage = async ({ params }: CategoryPageProps) => {

    const products: ProductType[] = await getData(params.category)

    return (
        <div className={s.container}>
            {
                products.map(item => (
                    <Link href={`/product/${item.id}`} key={item.id} className={`${s.link}  group odd:bg-fuchsia-50`} >
                        {
                            item.img
                            && <div className={s.image_container}>
                                <Image src={item.img} alt="" fill priority sizes="100w, 100vw" />
                            </div>
                        }

                        <div className={s.text_container}>
                            <h1>{item.title}</h1>
                            <h2 className="group-hover:hidden">{item.price}</h2>
                            <button className="hidden group-hover:block">Add to Cart</button>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CategoryPage