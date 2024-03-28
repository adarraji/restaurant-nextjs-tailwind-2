import { singleProduct } from "@/data"
import s from "./product.module.css"
import Image from "next/image"
import Price from "@/components/price/Price"


const SingleProductPage = () => {
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
                <Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options} />
            </div>
        </div>
    )
}

export default SingleProductPage