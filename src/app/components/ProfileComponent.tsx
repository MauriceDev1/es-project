"use client";

import { useState } from "react";

function ProfileComponent() {
    const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

    return (
        <div className="relative flex items-center">
            <button
                className="w-9 h-9 rounded-full bg-gray-500"
                onClick={() => setShowProfileMenu(!showProfileMenu)} // Simplified toggle
            ></button>
            {showProfileMenu && (
                <div className="absolute top-12 p-5 bg-white shadow-sm border border-gray-300 rounded-md">
                    {/* You can add your profile menu items here */}
                    <p>Profile Menu Item 1</p>
                    <p>Profile Menu Item 2</p>
                </div>
            )}
        </div>
    );
}

export default ProfileComponent;
