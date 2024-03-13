import Image from "next/image"
import s from "./featured.module.css"
import { featuredProducts } from "@/data"

const Featured = () => {
  return (
    <div className={s.container}>

      {/* WRAPPER */}
      <div className={s.wrapper}>

        {featuredProducts.map(item => (

          // SINGLE ITEM
          <div key={item.id} className={s.single_item}>

            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className={s.image_container}>
                <Image src={item.img} alt="" fill sizes="(max-width: 640px) 100vw, 100vw"/>
              </div>
            )}

            {/* TEXT CONTAINER */}
            <div className={s.text_container}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <span>${item.price}</span>
              <button>Add to Cart</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Featured