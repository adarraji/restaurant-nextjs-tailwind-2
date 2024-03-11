import Featured from "@/components/featured/Featured"
import Offer from "@/components/offer/Offer"
import Slider from "@/components/slider/Slider"
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
