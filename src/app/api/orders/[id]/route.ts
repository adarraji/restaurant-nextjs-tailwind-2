import prisma from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

type ParamsType = {
    id: string
}

export const PUT = async (req: NextRequest, { params }: { params: ParamsType }) => {
    const { id } = params

    try {
        const body = await req.json()
        await prisma.order.update({
            where: {
                id: id,
            },
            data: { status: body }
        })
        return new NextResponse(JSON.stringify({ message: "order has been updated" }), { status: 200 })

    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }

}