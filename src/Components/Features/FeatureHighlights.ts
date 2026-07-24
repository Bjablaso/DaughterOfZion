// FeatureHighlights.ts


import type { IconType } from "react-icons";
import { Sprout, CakeSlice, Soup, Heart} from 'lucide-react';

export interface FeatureItem {
    icon: IconType;
    title: string;
    description: string;
}

export const featureHighlights: FeatureItem[] = [
    {
        icon: Soup,
        title: "Authentic Recipes",
        description: "Traditional Liberian dishes made the right way.",
    },
    {
        icon: Sprout,
        title: "Fresh Ingredients",
        description: "We use the freshest local ingredients.",
    },
    {
        icon: CakeSlice,
        title: "Perfect for Any Event",
        description: "Weddings, birthdays, corporate & more.",
    },
    {
        icon: Heart,
        title: "Made with Love",
        description: "Every meal is prepared with care and passion.",
    },
];
