"use client";

import { useState } from "react";

export default function Loading() {

    const [dots, setDots] = useState(".");

    setTimeout(() => {
        if (dots.length == 3) {
            setDots(".");
        }
        else {
            setDots(dots + ".");
        }
    }, 150)

    return (<>
        <h1 className="text">
            Loading{dots}
        </h1>
    </>)
}