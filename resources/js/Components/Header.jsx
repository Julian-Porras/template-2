import { Link } from "@inertiajs/react";

const Header = () => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b shadow-sm border-gray-200 ">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <Link target="/" className="flex mx-2">
                            <span className="self-center italic font-bold font-quicksand whitespace-nowrap md:min-w-52">
                                PMANS v1.0
                            </span>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="flex items-center ms-3 cursor-pointer gap-2">
                            <div className="rounded-full w-9 h-9 border bg-[var(--secondary-color)] uppercase text-white text-xl font-quicksand font-semibold flex items-center justify-center">
                                F
                            </div>
                            <p className="text-sm md:text-base hover:underline ">
                                Lastname, Firstname
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
