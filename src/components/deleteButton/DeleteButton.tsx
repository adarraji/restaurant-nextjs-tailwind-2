"use client"
import Image from "next/image"
import s from "./deleteButton.module.css"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const DeleteButton = ({ id }: { id: string }) => {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <p>Loading ....</p>
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return
  }

  const handleDelete = async () => {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE"
    })

    if (res.status === 200) {
      router.push("/menu")
      toast("The product has been deleted")
    } else {
      const data = await res.json()
      toast.error(data.message)
    }
  }

  return (
    <div className={s.container}>
      <button>
        <Image alt="" src="/delete.png" width={20} height={20} onClick={handleDelete} />
      </button>
    </div>
  )
}

export default DeleteButton