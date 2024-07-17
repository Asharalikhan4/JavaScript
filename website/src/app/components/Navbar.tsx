import { FC } from "react";

const Navbar: FC = () => {
    return (
        <nav className="flex justify-between py-4">
            <div>Prev</div>
            <div>Next</div>
        </nav>
    );
};

export default Navbar;