"use client"
import { useEffect, useState } from "react";
import s from "./price.module.css"
import { ProductType } from "@/types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart/cart.reducer";


const Price = ({ product }: { product: ProductType }) => {
    const dispatch = useDispatch()

    const { price, options } = product

    const [total, setTotal] = useState(price)
    const [quantity, setQuantitiy] = useState(1)
    const [selected, setSelected] = useState(0)


    useEffect(() => {
        setTotal(
            quantity * (options?.length ? Number(price) + Number(options[selected].additionalPrice) : price)
        );
    }, [quantity, selected, options, price]);


    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            img: product.img,
            price: total,
            ...(product.options?.length && { optionTitle: product.options[selected].title }),
            quantity: quantity,
        }))
    }

    return (
        <div className={s.container}>
            <h2>${total}</h2>

            {/* OPTIONS CONTAINER */}
            <div className={s.options_container}>
                {
                    options?.length && options?.map((option, index) => (
                        <button
                            key={option.title}
                            style={{
                                background: selected === index ? "rgb(248 113 113)" : "white",
                                color: selected === index ? "white" : "rgb(248 113 113)",
                            }}
                            onClick={() => setSelected(index)} >
                            {option.title}
                        </button>
                    ))
                }
            </div>


            {/* QUANTITIY AND ADD BUTTON CONTAINER */}
            <div className={s.qunatitiy_addButton_container}>

                {/* QUANTITIY */}
                <div className={s.qunatitiy_container}>
                    <span>Quantity</span>
                    <div>
                        <button onClick={() => setQuantitiy(prev => prev > 1 ? prev - 1 : 1)}>{"<"}</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantitiy(prev => prev < 9 ? prev + 1 : 9)}>{">"}</button>
                    </div>
                </div>

                {/* CART BUTTON */}
                <button onClick={handleAddToCart}>Add to Cart</button>

            </div>

        </div>
    )
}

export default Price