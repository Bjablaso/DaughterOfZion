// @flow
import {ChevronRight, Clock, Copyright, Heart, Mail, MapPin, Phone} from 'lucide-react';
import MorterSVG from "../../assets/iconsvg/morter.svg"
import { footerData } from "./FooterData.ts.tsx";
import TreeIcon from "../../assets/iconsvg/Tree.svg";
import {FaWhatsapp} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import type {IconType} from "react-icons";


const constact = [FaWhatsapp, MdEmail];

const FooterTop = () => {
    function Icon(Component: IconType) {
        return (
            <Component className="h-6 w-6 text-african-gold hover:text-champagne-gold transition-colors

            " />
        );
    }

    return (
        <div className="flex w-full flex-col gap-10 px-8 py-10 lg:flex-row">

            {/* Left */}
            <div className="flex basis-[30%] flex-col gap-6">

                {/* Logo */}
                <div className="flex items-center gap-4">

                    <img
                        src={TreeIcon}
                        alt="Tree Icon"
                        className="h-28 w-28 shrink-0 object-contain"
                    />

                    <div className="flex min-w-0 flex-col">

                        <span
                            className="
                                block
                                font-logo
                                text-3xl
                                leading-tight
                                tracking-wide
                                text-warm-white
                                break-words
                            "
                        >
                            DAUGHTER of ZION
                        </span>

                        <span
                            className="
                                mt-1
                                uppercase
                                tracking-[0.2em]
                                text-african-gold
                                text-sm
                            "
                        >
                            Liberian Catering
                        </span>

                    </div>

                </div>

                {/* Description */}
                <p
                    className="
                        max-w-sm
                        text-light-coffee
                        leading-8
                        break-words
                    "
                >
                    Sharing the rich traditions and bold flavors of Liberia
                    through food made with love, passion, and purpose.
                </p>

                {/* Social */}
                <ul className="flex items-center gap-4 relative left-1/3">
                    {constact.map((ItemIcon, index) => (
                        <li key={index}>
                            {Icon(ItemIcon)}
                        </li>
                    ))}
                </ul>

            </div>

            {/* Right */}
            <div className="basis-[70%]">

                <ul className="grid grid-cols-2 gap-10 xl:grid-cols-4">

                    {footerData.map((section, sectionIndex) => (
                        <li key={sectionIndex} className="min-w-0">

                            <span className="mb-4 block font-semibold text-african-gold">
                                {section.header}
                            </span>

                            <ul className="space-y-3">

                                {section.data.map((item, itemIndex) => (
                                    <li
                                        key={`${sectionIndex}-${itemIndex}`}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="mt-1 text-african-gold shrink-0">
                                            {item.icon === "chevron" && <ChevronRight size={16} className="hover:opacity-35"  />}
                                            {item.icon === "phone" && <Phone size={16} className="hover:opacity-35" />}
                                            {item.icon === "email" && <Mail size={16} className="hover:opacity-35"  />}
                                            {item.icon === "location" && <MapPin size={16} className="hover:opacity-35"  />}
                                            {item.icon === "clock" && <Clock size={16}  className="hover:opacity-35"  />}
                                        </span>

                                        <span className="break-words whitespace-pre-line text-light-coffee">
                                            {item.description}
                                        </span>
                                    </li>
                                ))}

                            </ul>

                        </li>
                    ))}

                </ul>

            </div>

        </div>
    );
};

// const FooterTop =() =>{
//
//     function Icon(Component: IconType) {
//         return <Component className="h-6 w-6 text-african-gold" />;
//     }
//     return(
//         <div className="flex flex-row w-full h-[26vh] p-2">
//             <div className="flex flex-col basis-[30%] p-2 gap-2 ">
//                 <div className="flex flex-row items-center gap-4 relative left-10">
//                     <img src={TreeIcon} alt="Tree Icon" className="
//                     w-30 h-30
//                     object-contain
//                     " />
//                     <div className="flex flex-col gap-2 wrap-break-word">
//                         <span
//                             className="
//                               font-logo
//                                 text-2xl
//                                 leading-tight
//                                 tracking-wide
//                                 text-warm-white
//                                 whitespace-normal
//                                 wrap-break-word
//                             "
//                          >
//                          DAUGHTER  of ZION
//                         </span>
//
//
//
//                         <span className="text-african-gold">
//                             Liberian Catering
//                        </span>
//                     </div>
//                 </div>
//                 <span className=" wrap-break-word px-18">
//                     Sharing the rich traditions and bold flavors of Liberia through food made with love,
//                     passion, and purpose.
//                 </span>
//                 <ul className="flex flex-row gap-2 w-full justify-center">
//                     {constact.map((ItemIcon, index) => (
//                         <li key={index}>
//                             {Icon(ItemIcon)}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="basis-[70%] flex flex-row">
//                 <ul className="grid grid-cols-4 gap-8">
//                     {footerData.map((section, sectionIndex) => (
//                         <li key={sectionIndex} className="flex flex-col">
//
//                             {/* Header */}
//                             <span className="text-african-gold font-semibold mb-3">
//                 {section.header}
//             </span>
//
//                             {/* Items */}
//                             <ul className="space-y-2">
//                                 {section.data.map((item, itemIndex) => (
//                                     <li key={`${sectionIndex}-${itemIndex}`} className="flex items-center gap-2">
//
//                                         {/* Icon */}
//                                         <span className="text-african-gold">
//                             {item.icon === "chevron" && <ChevronRight size={16} />}
//                                             {item.icon === "phone" && <Phone size={16} />}
//                                             {item.icon === "email" && <Mail size={16} />}
//                                             {item.icon === "location" && <MapPin size={16} />}
//                                             {item.icon === "clock" && <Clock size={16} />}
//                         </span>
//
//                                         {/* Text */}
//                                         <span className="text-light-coffee whitespace-pre-line">
//                             {item.description}
//                         </span>
//
//                                     </li>
//                                 ))}
//                             </ul>
//
//                         </li>
//                     ))}
//                 </ul>
//
//
//
//             </div>
//         </div>
//     )
// }
// const FooterBottom =() =>{
//     return(
//         <div className="flex flex-row w-full h-[10vh]
//         p-2
//         ">
//             <div className="
//             flex flex-col
//             basis-[35%]
//             border-r-2 border-african-gold/30
//             justify-center
//             items-start
//             text-start
//             pl-20
//              ">
//
//                  <span className="flex flex-row items-center gap-1">
//                      <Copyright className="h-4 w-4"/>  2026 Duaghter of Zion Catering </span>
//
//                 <span className="text-african-gold ">All Right Reserve</span>
//             </div>
//             <div className="basis-[60%] grid grid-cols-2 items-center">
//
//                 <span className="flex flex-row items-center gap-1 justify-center relative left-1/4 ">
//                          <Heart className="h-4 w-4 text-african-gold "/>
//                        <span className="text-brown-gray "> Made with love from Liberia</span>
//                     </span>
//                 <div className="flex w-full h-full justify-end align-end text-end relative">
//                     <div className="absolute  top-0
//                         right-0
//                          -translate-y-1/3
//                           translate-x-1/3
//                           z-10
//                         ">
//                         <img src={MorterSVG} alt="Tree Icon" className="w-50 h-35 " />
//                     </div>
//
//                 </div>
//
//
//             </div>
//
//         </div>
//     )
// }
const FooterBottom = () => {
    return (
        <div className="
            relative
            flex
            w-full
            flex-col
            gap-6
            px-8
            py-2
            items-center
            lg:flex-row
            lg:items-center
            lg:justify-between
        ">
            <div className="flex flex-col relative left-15">
                <span className="flex items-center gap-1">
                    <Copyright className="h-4 w-4" />
                    2026 Daughter of Zion Catering
                </span>

                <span className="text-african-gold">
                    All Rights Reserved
                </span>
            </div>

            <div
                className="
                    hidden
                    w-px
                    self-stretch
                    bg-african-gold/30
                    lg:block

                "
            />

            <span className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-african-gold" />

                <span className="text-brown-gray">
                    Made with love from Liberia
                </span>
            </span>

            <img
                src={MorterSVG}
                alt="Mortar and pestle decoration"
                className="
                    h-auto
                    w-36
                    object-contain
                    lg:w-44

                "
            />
        </div>
    );
};
export const CateringFooter = () => {
    return (
        <div className=" w-full  h-full
        bg-espresso-brown
        text-warm-white

        ">
            <FooterTop/>
            <FooterBottom/>
        </div>
    );
};
