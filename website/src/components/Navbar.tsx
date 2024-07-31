import { FC } from "react";
import Link from "next/link";
import ThemeToggle from "../utils/ThemeToggle";

const Navbar: FC = () => {
    return (
        <nav className="flex justify-between items-center font-medium border-2 border-[#005B41] dark:border-violet-500 rounded-md md:px-4 md:py-4 px-2 py-3">
            <Link href={"/"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Home</Link>
            <div className="flex items-center gap-x-4 px-1">
                <Link href={"/table-of-contents"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Contents</Link>
                <Link href={"/compiler"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Compiler</Link>
                <Link href={"/contact-us"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Contact-Us</Link>
                <ThemeToggle className="transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300 text-2xl" />
            </div>
        </nav>
    );
};

export default Navbar;