"use client"
import { useEffect, useState } from "react";
import s from "./countDown.module.css";
import Countdown from "react-countdown";

const CountDown = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const endDate = new Date("2024-07-25");

    return (
        <div className={s.countDown}>
            {isClient && <Countdown date={endDate} />}
        </div>
    );
};

export default CountDown;
