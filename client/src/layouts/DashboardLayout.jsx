import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Bell, ChevronDown, User as UserIcon } from "lucide-react";

export default function DashboardLayout() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation(); // Used to trigger a re-check on navigation

    useEffect(() => {
        const fetchUser = () => {
            try {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    // Ensure we are setting the correct fields from your backend response
                    setUser({
                        name: parsedUser.name || "User",
                        email: parsedUser.email || ""
                    });
                }
            } catch (e) {
                console.error("Invalid user in storage", e);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [location]); // Re-run check whenever the route changes

    const getInitials = (name) => {
        if (!name || name === "User") return "??";
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <div className="h-screen w-screen flex overflow-hidden bg-gray-50">
            <Sidebar />

            <div className="flex flex-col flex-1 bg-transparent">
                {/* TOP BAR */}
                <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
                    <div>
                        <p className="text-xl font-semibold text-gray-900">
                            Dashboard
                        </p>
                    </div>

                    <div className="h-6 w-px bg-gray-200 mx-2"></div>

                    <div className="flex items-center gap-6">
                        {/* DYNAMIC USER PROFILE */}
                        {loading ? (
                            <div className="flex items-center gap-3 animate-pulse">
                                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 pl-2 group cursor-pointer">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-medium text-gray-900 leading-none">
                                        {user?.name}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {user?.email}
                                    </p>
                                </div>

                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm border-2 border-white shadow-sm">
                                        {user?.name ? getInitials(user.name) : <UserIcon size={16} />}
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}