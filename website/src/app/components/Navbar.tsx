import { FC } from "react";
import Link from "next/link";
import ThemeToggle from "../utils/ThemeToggle";

const Navbar: FC = () => {
    return (
        <nav className="flex flex-shrink-0 justify-between items-center py-2 px-4 font-medium border-2 border-[#005B41] dark:border-cyan-500 rounded-md">
            <Link href={"/"} className="cursor-pointer hover:text-[#005B41] hover:dark:text-cyan-100">Home</Link>
            <div className="flex items-center gap-x-4">
                <Link href={"/table-of-contents"} className="cursor-pointer hover:text-[#005B41] hover:dark:text-cyan-100">Contents</Link>
                <ThemeToggle className="hover:text-[#005B41] hover:dark:text-cyan-100" />
            </div>
        </nav>
    );
};

export default Navbar;