// @flow
import { featureHighlights } from "./FeatureHighlights";

export const FeatureHighlights = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2  md:grid-cols-4">
            {featureHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-4"
                    >
                        <Icon className="h-6 w-6  md:h-8 lg:w-8  shrink-0 text-african-gold" />

                        <div className="flex flex-col">
                            <h3
                                className="
                                    text-lg
                                    font-semibold
                                    leading-tight
                                "
                            >
                                {item.title}
                            </h3>

                            <p
                                className="
                                    mt-1
                                    font-body
                                    text-[0.7rem]
                                    leading-6
                                    text-light-coffee
                                "
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};