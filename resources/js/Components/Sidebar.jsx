import React from "react";
import mainRouter from "../Router/mainRouter";
import { useUi } from "../Context/UiContext";
import { Link, usePage } from "@inertiajs/react";

export default function Sidebar() {
    const { sidebarOpen } = useUi();
    const { url } = usePage();
    let sidebarHeader = "information system";

    return (
        <>
            <aside
                className={`fixed top-0 left-0 z-40 w-[16rem] h-screen font-quicksand uppercase text-sm font-semibold border-r pt-20 border-gray-200 bg-white transition-transform duration-150 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <p className="text-start text-xs my-2 mx-4 text-slate-500 uppercase">
                    {sidebarHeader}
                </p>
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2">
                        {mainRouter.map((route) => {
                            const Icon = route?.icon;
                            const isActive = url.startsWith(route.path);
                            return (
                                <Link
                                    key={route.path}
                                    href={route.path}
                                    className={`flex items-center p-2 px-3 rounded-[4px] ${
                                        isActive
                                            ? `text-white bg-[var(--secondary-color)]`
                                            : `hover:bg-slate-100`
                                    }`}
                                >
                                    {Icon && <Icon size={17} />}               
                                    <span className="ms-3">
                                        {route.label}                           
                                    </span>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </aside>
        </>
    );
}
