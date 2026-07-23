// @flow

import {Navbar} from "./Components/Navbar.tsx";
import {HeroImage} from "./Components/HeroImage.tsx";
import {FeatureHighlights} from "./Components/Features/FeatureHighlights.tsx";
import {CateringFooter} from "./Components/Footer/CateringFooter.tsx";

export const CateringLayout = () => {
    return (
        <div className="flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden">
            <Navbar />

            <main className="w-full min-w-0 flex-1 pt-20">
                <HeroImage />
                <FeatureHighlights />
            </main>

            <footer className="w-full min-w-0">
                <CateringFooter />
            </footer>
        </div>
    );
};