import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useUi } from "../Context/UiContext";

export default function MainLayout({ children }) {
    const { sidebarOpen } = useUi();
    return (
        <div className="flex min-h-screen w-screen">
            <Header />
            <Sidebar />
            <main
                className={`flex flex-1 flex-col w-full p-4 pt-16 mt-2 pb-10 scroll-smooth overflow-auto duration-150  ${
                    sidebarOpen ? "md:ml-[16rem]" : ""
                }`}
            >
                {children}
            </main>
        </div>
    );
}
