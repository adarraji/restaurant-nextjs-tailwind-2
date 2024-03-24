import { singleProduct } from "@/data"
import s from "./product.module.css"
import Image from "next/image"


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
                <span>{singleProduct.price}</span>
            </div>
        </div>
    )
}

export default SingleProductPage