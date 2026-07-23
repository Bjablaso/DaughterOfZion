// @flow

import {Navbar} from "./Components/Navbar.tsx";
import {HeroImage} from "./Components/HeroImage.tsx";
import {FeatureHighlights} from "./Components/Features/FeatureHighlights.tsx";

export const CateringLayout = () => {
    return (
        <div className="grid grid-rows-[1fr_auto] w-full h-full ">

                <Navbar/>

            <main className="pt-20">
                <HeroImage/>
                <FeatureHighlights/>


                {/*<HeroImage/>*/}
                {/*<HeroImage/>*/}
            </main>

            <footer className="border border-green-800">
                Footer here
            </footer>


        </div>
    );
};