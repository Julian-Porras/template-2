import React from "react";

export default function PageLayout({ header, secondary, children, className }) {
    return (
        <>
            <div
                className={`flex flex-row flex-wrap items-start justify-between mb-3 gap-2 ${className}`}
            >
                <h1 className="text-base md:text-xl uppercase font-bold">
                    {header}
                </h1>
                <div className="flex-1 flex flex-col items-end -mt-2 ">
                    {secondary}
                </div>
            </div>
            {children}
        </>
    );
}
