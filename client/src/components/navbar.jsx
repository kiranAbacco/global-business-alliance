import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <img
                        src="/images/img12.png"
                        alt="GBA Logo"
                        className="h-10 w-auto"
                    />
                    <span className="font-bold text-xl text-blue-900">

                    </span>
                </div>

                {/* MENU */}
                <div className="hidden md:flex items-center gap-8 text-base font-medium">
                    <Link to="/" className="hover:text-blue-700">Home</Link>
                    <Link to="/members" className="hover:text-blue-700">Members</Link>
                    {/* <Link to="/industries" className="hover:text-blue-700">Industries</Link> */}
                    <Link to="/pricing" className="hover:text-blue-700">Membership</Link>
                    <a href="/verification" className="hover:text-blue-600">
                        Verification
                    </a>
                    <Link to="/about" className="hover:text-blue-700">About</Link>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex items-center gap-4">
                    <a
                        href="/login"
                        className="text-base font-medium text-gray-700 hover:text-blue-700 transition"
                    >
                        Login
                    </a>

                    <a
                        href="/join"
                        className="bg-blue-900 text-white px-6 py-2.5 rounded-lg text-base font-semibold shadow-sm hover:bg-blue-800 hover:shadow-md transition"
                    >
                        Join Now
                    </a>
                </div>

            </div>
        </nav>
    );
}
