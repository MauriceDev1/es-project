"use client";

import { useState } from "react";

function ProfileComponent() {
    const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

    const handleLogout = async () => {
        try {
          // Send a POST request to the logout API route
          const response = await fetch('/api/logout', {
            method: 'POST',
          });

          // Check if the logout was successful
          if (response.ok) {
            // Optionally, clear local storage or any auth-related state here
            // e.g., localStorage.removeItem('user');

            // Redirect the user to the login page (this is handled in your API route)
            window.location.href = '/login';
          } else {
            // Handle errors (optional)
            console.error('Logout failed');
          }
        } catch (error) {
          console.error('Error during logout:', error);
        }
      };

    return (
        <div className="relative flex items-center">
            <button
                className="w-9 h-9 rounded-full bg-gray-500"
                onClick={() => setShowProfileMenu(!showProfileMenu)} // Toggle menu visibility
            ></button>
            {showProfileMenu && (
                <div className="absolute top-12 p-5 bg-white shadow-sm border border-gray-300 rounded-md">
                    {/* Profile menu items */}
                    <p>Profile Menu Item 1</p>
                    <p>Profile Menu Item 2</p>
                    <button
                        onClick={handleLogout}
                        className="mt-2 text-red-600 hover:text-red-800"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProfileComponent;
