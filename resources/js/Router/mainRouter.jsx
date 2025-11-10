import {
    LayoutDashboard,
    MessageSquareMore,
    SquareMousePointer,
} from "lucide-react";
import React from "react";

const mainRouter = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/response", label: "responses", icon: MessageSquareMore },
    { path: "/button", label: "Buttons", icon: SquareMousePointer },
];

export default mainRouter;
