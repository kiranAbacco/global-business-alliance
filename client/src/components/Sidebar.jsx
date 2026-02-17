// Sidebar Component
import { LayoutDashboard, BarChart3, Users, LogOut, Home, UserPlus, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            navigate("/");
        }
    };

    return (
        <aside className="
            w-16 hover:w-64
            bg-white border-r border-gray-200
            flex flex-col h-screen sticky top-0
            transition-all duration-300
            group overflow-hidden
        ">
            {/* Logo */}
            <div className="h-16 flex items-center justify-center px-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <img
                        src="/photos/logo1.png"
                        alt="GBA Logo"
                        className="h-8 w-8 object-contain"
                    />
                    <span className="text-xl font-semibold text-gray-900">
                        GBA
                    </span>
                </div>
            </div>


            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1">
                <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 group/item">
                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-600 transition-all duration-200">
                        <LayoutDashboard size={18} className="text-gray-700 group-hover/item:text-white" />
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Dashboard
                    </span>
                </Link>

                <Link to="/members-list" className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 group/item">
                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-600 transition-all duration-200">
                        <Users size={18} className="text-gray-700 group-hover/item:text-white" />
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Members
                    </span>
                </Link>

                <Link to="pricing" className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 group/item">
                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-600 transition-all duration-200">
                        <BarChart3 size={18} className="text-gray-700 group-hover/item:text-white" />
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Upgrade
                    </span>
                </Link>
            </nav>

            {/* Logout */}
            <div className="p-3 border-t border-gray-200">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group/item"
                >
                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-600 transition-all duration-200">
                        <LogOut size={18} className="text-gray-700 group-hover/item:text-white" />
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Logout
                    </span>
                </button>
            </div>
        </aside>
    );
}