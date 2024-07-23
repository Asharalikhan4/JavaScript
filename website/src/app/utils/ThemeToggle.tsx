"use client";
import {FC, useState, useEffect} from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: FC = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);

    useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme === "dark") {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);

    useEffect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkTheme]);

    console.log(darkTheme);

    return (
        <div>
			<button onClick={() => setDarkTheme(!darkTheme)} className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full dark:bg-gray-800">
                {
                    !darkTheme ? (
                        <FaMoon className="text-gray-800 dark:text-gray-200" />
                    ) : (
                        <FaSun className="text-gray-800 dark:text-gray-200" />
                    )
                }
            </button>
		</div>
    );
};

export default ThemeToggle;