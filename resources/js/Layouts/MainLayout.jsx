import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen w-screen">
            <Header />
            <Sidebar />
            <main
                className={`flex flex-1 flex-col w-full p-4 pt-16 mt-2 pb-10 scroll-smooth overflow-auto duration-150 ml-[15.5rem]`}
            >
                {children}
                {/* <Footer /> */}
            </main>
        </div>
    );
}
