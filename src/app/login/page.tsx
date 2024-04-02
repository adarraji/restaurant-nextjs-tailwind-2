"use client"
import s from "./login.module.css"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from 'react'

const LoginPage = () => {

    const { status } = useSession()
    const router = useRouter()

    if (status === "loading") {
        return <p>Loading ...</p>
    }

    if (status === "authenticated") {
        router.push("/")
    }


    return (
        <div className={s.container}>

            {/* BOX */}
            <div className={s.box}>

                {/* IMAGE CONTAINER */}
                <div className={s.image_continaer}>
                    <Image src="/loginBg.png" alt="" fill sizes="100vw 100vw" />
                </div>

                {/* FORM CONTAINER */}
                <div className={s.form_container}>
                    <h1>Welcome</h1>
                    <p>Log into your account or create a new one using social buttons</p>
                    <button onClick={() => signIn("google")}>
                        <Image src="/google.png" alt="" width={20} height={20} />
                        <span>Sign in with Google</span>
                    </button>
                    <button>
                        <Image src="/facebook.png" alt="" width={20} height={20} />
                        <span>Sign in with Facebook</span>
                    </button>
                    <p>
                        Have a problem? <Link href="/">Contact us</Link>
                    </p>
                </div>

            </div>

        </div >
    )
}

export default LoginPage
