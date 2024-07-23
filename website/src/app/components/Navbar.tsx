"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "../utils/ThemeToggle";

const Navbar: FC = () => {

    const router = useRouter();

    return (
        <nav className="flex justify-between items-center py-2 font-semibold border-2 border-cyan-500 p-4 rounded">
            <Link href={"/"} className="cursor-pointer">Home</Link>
            <div className="flex items-center gap-x-4">
                <ThemeToggle />
                <Link href={"/table-of-contents"} className="cursor-pointer">Contents</Link>
                <div className="cursor-pointer" onClick={() => router.back()}>Prev</div>
                <div className="cursor-pointer">Next</div>
            </div>
        </nav>
    );
};

export default Navbar;