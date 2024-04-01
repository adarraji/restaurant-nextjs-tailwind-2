import Image from "next/image"
import s from "./featured.module.css"



const getData = async () => {
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/api/products`, { cache: "no-store" })
  if (!res.ok) {
    throw new Error("Failed!")
  }
  return res.json()
}

const Featured = async () => {

  const featuredProducts = await getData()

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
                <Image src={item.img} alt="" fill sizes="100vw, 100vw" />
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