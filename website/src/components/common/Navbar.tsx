"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/utils/ThemeToggle";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar: FC = () => {

    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const handleToggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const theme = localStorage.getItem("theme");

    return (
        <nav className="border-2 border-[#005B41] dark:border-violet-500 rounded-md">
            <div className="px-2 py-2 flex items-center justify-between md:hidden">
                <Link href={"/"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Home</Link>
                <div className="flex items-center space-x-2">
                    <ThemeToggle className="transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300 text-2xl" />
                    {mobileMenu ? (
                        <IoMdClose className="text-2xl cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-500" onClick={handleToggleMobileMenu} />
                    ) : (
                        <RxHamburgerMenu className="text-2xl cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-500" onClick={handleToggleMobileMenu} />
                    )}
                </div>
            </div>
            {
                mobileMenu ? (
                    <div className="relative h-px md:hidden my-2">
                        <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'dark'
                                ? 'from-transparent via-violet-500 to-transparent'
                                : 'from-transparent via-[#005B41] to-transparent'
                            }`}></div>
                    </div>
                ) : (
                    <></>
                )
            }
            {mobileMenu && (
                <div className="md:hidden px-2 py-2 space-y-2">
                    <Link href={"/table-of-contents"} className="block cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300" onClick={handleToggleMobileMenu}>Contents</Link>
                    <Link href={"/compiler"} className="block cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300" onClick={handleToggleMobileMenu}>Compiler</Link>
                    <Link href={"/contact-us"} className="block cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300" onClick={handleToggleMobileMenu}>Contact-Us</Link>
                </div>
            )}
            <div className="hidden md:flex justify-between items-center font-medium md:px-4 md:py-4 px-2 py-3">
                <Link href={"/"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Home</Link>
                <div className="flex items-center gap-x-4 px-1">
                    <Link href={"/table-of-contents"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Contents</Link>
                    <Link href={"/compiler"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Compiler</Link>
                    <Link href={"/contact-us"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Contact-Us</Link>
                    <ThemeToggle className="transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300 text-2xl" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;