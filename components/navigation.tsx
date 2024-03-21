"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    const [counter, setCounter] = useState(0);
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link> {path === "/" ? "🔥" : ""}</li>
                <li><Link href="/about-us">About US</Link>{path === "/about-us" ? "🔥" : ""}</li>
                <li><button onClick={() => { setCounter((prev) => prev+1)}}>{counter}</button></li>
            </ul>
        </nav>
    );
} 