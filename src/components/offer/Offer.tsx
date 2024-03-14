import Image from "next/image"
import s from "./offer.module.css"
import CountDown from "../countdown/CountDown"

const Offer = () => {
  return (
    <div className={s.container}>

      {/* TEXT CONTAINER */}
      <div className={s.text_container}>
        <h1>Delicious Burger & French Fries</h1>
        <p> Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
        <CountDown/>
        <button>Order Now</button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className={s.image_container}>
        <Image src="/offerProduct.png" alt="" fill sizes="100vw, 100vw" />
      </div>

    </div>
  )
}

export default Offer