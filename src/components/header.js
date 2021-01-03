import React from "react";

import Menu from "./menu";
import IconLab from "./icon-lab";

const Header = () => (
    <header className="bg-gray-800 text-gray-200 font-semibold font-sans">
        <Menu />
        <div className="flex flex-row justify-center text-center p-2 leading-7 tracking-wider space-x-2">
            <IconLab className="w-10 h-10 mt-3" />
            <div className="flex flex-col">
                <div className="text-4xl tracking-widest">Lab4Developers</div>
                <div className="text-lg pb-10">Experimentos de um dev.</div>
            </div>
        </div>
    </header>
);

export default Header;