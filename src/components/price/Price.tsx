"use client"
import { useEffect, useState } from "react";
import s from "./price.module.css"

type PriceProps = {
    id: number;
    price: number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({ id, price, options }: PriceProps) => {

    const [total, setTotal] = useState(price)
    const [quantity, setQuantitiy] = useState(1)
    const [selected, setSelected] = useState(0)


    useEffect(() => {
        setTotal(
            quantity * (options ? price + options[selected].additionalPrice : price)
        );
    }, [quantity, selected, options, price]);


    return (
        <div className={s.container}>
            <h2>${total.toFixed(2)}</h2>

            {/* OPTIONS CONTAINER */}
            <div className={s.options_container}>
                {
                    options?.map((option, index) => (
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
                <button>Add to Cart</button>

            </div>

        </div>
    )
}

export default Price