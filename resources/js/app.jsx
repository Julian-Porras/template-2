import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "../css/app.css";
import MainLayout from "./Layouts/MainLayout";
import { UiProvider } from "./Context/UiContext";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <MainLayout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        // createRoot(el).render(<App {...props} />);
        root.render(
            <UiProvider>
                <App {...props} />
            </UiProvider>
        );
    },
    // progress: {
    //     color: "#29d",
    // },
});
