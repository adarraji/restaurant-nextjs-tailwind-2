import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./connect"
import { PrismaAdapter } from "@next-auth/prisma-adapter"



export const authOptions: NextAuthOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
            // authorization: {
            //     params: {
            //         response_type: "code",
            //         prompt: "select_account",
            //         scope: "email profile",
            //         client_id: process.env.GOOGLE_ID!,
            //         redirect_uri: "http://localhost:3000/api/auth/callback/google", // Specify callback URL
            //     },
            // },
        }),
    ]
}