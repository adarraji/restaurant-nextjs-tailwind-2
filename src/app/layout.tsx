import Notification from "@/components/notification/Notification"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from "@/components/authProvider/AuthProvider"
import QueryProvider from "@/components/queryProvider/QueryProvider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import StoreProvider from "@/components/storeProvider/StoreProvider"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <StoreProvider >
          <AuthProvider>
            <QueryProvider>
              <Notification />
              <Navbar />
              {children}
              <Footer />
              <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
            </QueryProvider>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
