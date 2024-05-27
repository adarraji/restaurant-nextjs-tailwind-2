"use client"

import Image from "next/image";
import React from "react";
import { selectProducts, selectTotalItems, selectTotalPrice } from "@/store/cart/cart.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cart/cart.reducer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const products = useSelector(selectProducts)
  const totalItems = useSelector(selectTotalItems)
  const totalPrice = useSelector(selectTotalPrice)
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const router = useRouter()

  const handleCheckout = async () => {
    if (!session) {
      router.push("/")
    } else {
      try {
        const res = await fetch(`/api/orders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email
          })
        })
        const data = await res.json()
        router.push(`/payment/${data.id}`)

      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">

        {/* SINGLE ITEM */}
        {
          products.map(item => (
            <div className="flex items-center justify-between mb-4" key={item.id}>
              {item.img && <Image src={item.img} alt="" width={100} height={100} />}
              <div className="">
                <h1 className="uppercase text-xl font-bold">{item.title}    x{item.quantity}</h1>
                <span>{item.optionTitle}</span>
              </div>
              <h2 className="font-bold">${item.price}</h2>
              <span className="cursor-pointer" onClick={() => dispatch(removeFromCart(item))}>X</span>
            </div>
          ))
        }
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;

