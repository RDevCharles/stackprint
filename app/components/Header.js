"use client";

import Link from "next/link";
import { Monofett } from "next/font/google";

const mono = Monofett({ subsets: ["latin"], weight: "400" });
export default function Header() {
  return (
    <div className="w-100vw">
      <Link href="/">
        <h1 className={`${mono.className}  mb-2 text-4xl ml-4 absolute left-3`}>
          Print Stack
        </h1>
      </Link>
      <Link href="https://github.com/RDevCharles/stackprint">
        <h1
          style={{
            position: "absolute",
            right: "1.5%",
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        >
          github
        </h1>
      </Link>
    </div>
  );
}
