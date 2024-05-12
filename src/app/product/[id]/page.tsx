import s from "./product.module.css"
import Image from "next/image"
import Price from "@/components/price/Price"
import { ProductType } from "@/types/types"
import DeleteButton from "@/components/deleteButton/DeleteButton"


const getData = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/api/products/${id}`, { cache: "no-store" })
    if (!res.ok) {
        throw new Error("Failed!")
    }
    return res.json()
}

const SingleProductPage = async ({ params }: { params: { id: string } }) => {

    const { id } = params
    const singleProduct: ProductType = await getData(id)

    return (
        <div className={s.container}>
            <div className={s.image_container}>
                {
                    singleProduct.img
                    && <Image src={singleProduct.img} alt="" fill sizes="100vw, 100vw" />
                }
            </div>
            <div className={s.text_container}>
                <h1>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price product={singleProduct} />
            </div>
            <DeleteButton id={singleProduct.id} />
        </div>
    )
}

export default SingleProductPage