// @flow

import * as React from "react";
import { useState } from "react";
import { EventButton } from "./EventButton.tsx";
import TreeIcon from "/public/iconsvg/tree.svg";


const navData = [
    "Home",
    "About Us",
    "Services",
    "Menu",
    "Gallery",
    "Testimonials",
    "Contact",
];


const Logo = () => {
    return (
        <div className="
            flex
            flex-col
            justify-center
            cursor-pointer
        ">

            <h1 className="
                font-logo
                text-3xl
                leading-none
                text-warm-white
            ">
                Daughter
            </h1>

            <div className="flex flex-row">
                <img src={TreeIcon} alt="Tree Icon" className="w-8 h-8" />;

                <div>
                 <span className="
                    font-logo
                    text-2xl
                    text-warm-white
                    leading-none
                 ">
                   <span className="text-african-gold">of</span>  Zion
                  </span>
                </div>

            </div>


        </div>
    );
};



const NavigationLinks = () => {

    const [active, setActive] = useState("Home");


    return (

        <ul className="
            hidden
            lg:flex
            items-center
            gap-8
        ">

            {navData.map((item)=>(

                <li
                    key={item}
                    onClick={()=>setActive(item)}
                    className={`
                        cursor-pointer
                        font-body
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        relative
                        pb-1

                        ${
                        active === item
                            ?
                            "text-african-gold after:absolute after:left-0 after:bottom-0 after:w-full " +
                            "after:h-[2px] after:bg-african-gold"
                            :
                            "text-warm-white hover:text-champagne-gold"
                    }
                    `}
                >

                    {item}

                </li>

            ))}


        </ul>

    );
};



export const Navbar: React.FC = () => {


    return (

        <header
            className="
            w-full
            h-20

            flex
            items-center
            justify-between

            px-8

            bg-espresso-brown

            border-b
            border-african-gold/30

            shadow-md
            "
        >


            <Logo/>


            <NavigationLinks/>


            <EventButton/>


        </header>

    );

};