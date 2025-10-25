import React from "react";

export default function Sidebar() {
  let sidebarHeader = "information system";
    return (
        <>
            <aside
                className={`fixed top-0 left-0 z-40 w-[15.5rem] h-screen font-quicksand uppercase text-sm font-semibold border-r pt-20 border-gray-200 bg-white transition-transform duration-150 translate-x-0`}
            >
                <p className="text-start text-xs my-2 mx-4 text-slate-500 uppercase">
                    {sidebarHeader}
                </p>
            </aside>
        </>
    );
}
