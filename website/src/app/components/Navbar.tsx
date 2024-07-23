"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar: FC = () => {

    const router = useRouter();

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    return (
        <nav className="flex justify-between items-center py-2 font-semibold border-2 border-cyan-500 p-4 rounded">
            <Link href={"/"} className="cursor-pointer">Home</Link>
            <div className="flex items-center gap-x-4">
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full dark:bg-gray-800"
                >
                    {theme === "light" ? (
                        <FaMoon className="text-gray-800 dark:text-gray-200" />
                    ) : (
                        <FaSun className="text-gray-800 dark:text-gray-200" />
                    )}
                </button>
                <Link href={"/table-of-contents"} className="cursor-pointer">Contents</Link>
                <div className="cursor-pointer" onClick={() => router.back()}>Prev</div>
                <div className="cursor-pointer">Next</div>
            </div>
        </nav>
    );
};

export default Navbar;