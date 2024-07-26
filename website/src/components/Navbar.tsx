import { FC } from "react";
import Link from "next/link";
import ThemeToggle from "../utils/ThemeToggle";

const Navbar: FC = () => {
    return (
        <div className="space-y-4">
            <nav className="flex flex-shrink-0 justify-between items-center py-2 px-4 font-medium border-2 border-[#005B41] dark:border-violet-500 rounded-md">
                <Link href={"/"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Home</Link>
                <div className="flex items-center gap-x-4">
                    <Link href={"/table-of-contents"} className="cursor-pointer transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300">Contents</Link>
                    <ThemeToggle className="transition-colors duration-200 hover:text-[#005B41] hover:dark:text-violet-300" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;