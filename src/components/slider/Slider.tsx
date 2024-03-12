"use client"
import Image from "next/image"
import s from "./slider.module.css"
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === data.length - 1 ? 0 : prev + 1)
    }, 3000)

    return () => clearInterval(interval)

  }, [])



  return (
    <div className={s.slider_container}>

      {/* TEXT CONTAINER */}
      <div className={s.text_container}>
        <h1>{data[currentSlide].title}</h1>
        <button >Order Now</button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className={s.image_container}>
        <Image src={data[currentSlide].image} alt="" fill />
      </div>


    </div>
  )
}

export default Slider