import React from "react";

import IconLab from "./icon-lab";

const Menu = () => (
    <div className="flex flex-row p-10 font-semibold tracking-wide">
        <a className="w-32 flex space-x-2" href="#">
            <span>
                <IconLab className="w-6 h-6" />
            </span>
            <span>L4Devs</span>
        </a>
        <div className="flex flex-row space-x-20 w-full justify-end">
            <a href="#">Ínicio</a>
            <a href="#">Sobre</a>
            <a href="#">Artigos</a>
        </div>
    </div>
);

export default Menu;