// @flow

import {Navbar} from "./Components/Navbar.tsx";

export const CateringLayout = () => {
    return (
        <div className="grid grid-rows-[75px_1fr_75px] w-full h-full ">
           {/*// <nav  className="border border-blue-500 ">*/}
                <Navbar/>
            {/*</nav>*/}
          {/*///  <div className="border border-blue-500 "></div>*/}
            <div className="border border-purple-700 "></div>
            <div className="border border-orange-500 "></div>

        </div>
    );
};