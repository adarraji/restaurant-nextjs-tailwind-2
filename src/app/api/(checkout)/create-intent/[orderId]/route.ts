import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (request: NextRequest, { params }: { params: { orderId: string } }) => {
    const { orderId } = params

    try {
        // FIND ORDER
        const order = await prisma.order.findUnique({
            where: {
                id: orderId,
            },
        })
        if (order) {
            // CREATE STRIPE INTENT
            const paymentIntent = await stripe.paymentIntents.create({
                amount: 100 * 100,
                currency: "usd",
                automatic_payment_methods: {
                    enabled: true,
                },
            });

            // UPDATE ORDER

            await prisma.order.update({
                where: {
                    id: orderId,
                },
                data: { intent_id: paymentIntent.id }
            })

            // RETURN STRIPE PAYMENT INTENT CLIENT SECRET
            return new NextResponse(
                JSON.stringify({ clientSecret: paymentIntent.client_secret }),
                { status: 200 }
            )

        } else {
            return new NextResponse(JSON.stringify({ message: "Order not found!" }), { status: 404 })
        }


    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }

}