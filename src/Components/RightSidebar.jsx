import React from "react";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
    const navigate = useNavigate();

    const handleHomeClick = (e) => {
        e.preventDefault();
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col">
            <div className="bg-gray-950/90 backdrop-blur-xl border border-[#51A2FF]/20 border-r-0 rounded-l-2xl overflow-hidden shadow-2xl shadow-black/50">
                <div className="h-px bg-gradient-to-r from-transparent to-[#51A2FF]/60" />

                <div className="py-2">
                    <a
                        href="/"
                        onClick={handleHomeClick}
                        className="group flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                    >
                        <span className="absolute right-0 top-0 bottom-0 w-0.5 bg-[#51A2FF]/0 group-hover:bg-[#51A2FF] transition-all duration-300 rounded-l-full" />
                        <span className="text-xl">🏠</span>
                        <span className="text-sm font-medium whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-[60px] group-hover:opacity-100 overflow-hidden transition-all duration-300">
                            Home
                        </span>
                    </a>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent to-[#51A2FF]/60" />
            </div>
        </div>
    );
};

export default RightSidebar;
