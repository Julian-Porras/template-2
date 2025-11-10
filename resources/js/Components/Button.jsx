import { Menu } from "lucide-react";

function MenuButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-white rounded-md p-1 mx-2 cursor-pointer hover:bg-gray-100"
        >
            <Menu strokeWidth="3px" size={22} />
        </button>
    );
}

export { MenuButton };
