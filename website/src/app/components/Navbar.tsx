"use client";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: FC = () => {

    const router = useRouter();

    return (
        <nav className="flex justify-between py-4 font-semibold border-2 border-cyan-500 p-4 rounded">
            <Link href={"/"} className="cursor-pointer">Home</Link>
            <div className="flex gap-x-4">
                <div className="cursor-pointer" onClick={() => router.back()}>Prev</div>
                <div className="cursor-pointer">Next</div>
            </div>
        </nav>
    );
};

export default Navbar;