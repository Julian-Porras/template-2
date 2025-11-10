import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const UiContext = createContext();

export const UiProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebarOpen(() => false);
            } else {
                setSidebarOpen(() => true);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // run on mount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <UiContext.Provider
            value={{
                sidebarOpen,
                setSidebarOpen,
            }}
        >
            {children}
        </UiContext.Provider>
    );
};

export const useUi = () => useContext(UiContext);
