"use client"
import s from "./orders.module.css"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { OrderType } from "../../types/types"
import { toast } from "react-toastify";

const OrdersPage = () => {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "unauthenticated") {
    router.push("/")
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch(`/api/orders`).then((res) =>
        res.json(),
      ),
  })

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: String, status: String }) => {
      return fetch(`/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(status)
      })
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
    }
  })

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: String) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.elements[0] as HTMLInputElement
    const status = input.value

    mutation.mutate({ id, status })
    toast.success("The order statushas been changed!")

  }

  if (isPending || status === "loading") return 'Loading...'


  return (
    <div className={s.container}>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => (
            <tr className={`${item.status !== "delivered" ? "bg-red-50" : "white"} `} key={item.id}>
              <td>{item.id}</td>
              <td>{item.createdAt.toString().slice(0, 10)}</td>
              <td>{item.price}</td>
              <td>{item.products[0].title}</td>

              {session?.user?.isAdmin

                ? <td>
                  <form className={s.admin_form} onSubmit={e => handleUpdate(e, item.id)}>
                    <input placeholder={item.status}></input>
                    <button>
                      <Image src="/edit.png" alt="" width={20} height={20} />
                    </button>
                  </form>
                </td>

                : <td>{item.status}</td>

              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage