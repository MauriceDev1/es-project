"use client";

import React, { useState } from 'react';
import Card from "@/app/components/Card"; // Adjust the path to your component

// Define a type for the service data
interface ServiceType {
    id: number;
    service: string;
    link: string;
    image: string;
}

const ITEMS_PER_PAGE = 16; // Maximum items to display per page

function ViewAll() {
    const allTypes: ServiceType[] = [
        { id: 1, service: 'test1', link: '/profile/1', image: '' },
        { id: 2, service: 'test2', link: '/profile/2', image: '' },
        { id: 3, service: 'test3', link: '/profile/3', image: '' },
        { id: 4, service: 'test4', link: '/profile/4', image: '' },
        { id: 5, service: 'test5', link: '/profile/5', image: '' },
        { id: 6, service: 'test6', link: '/profile/6', image: '' },
        { id: 7, service: 'test7', link: '/profile/7', image: '' },
        { id: 8, service: 'test8', link: '/profile/8', image: '' },
        { id: 9, service: 'test9', link: '/profile/9', image: '' },
        { id: 10, service: 'test10', link: '/profile/10', image: '' },
        { id: 11, service: 'test11', link: '/profile/11', image: '' },
        { id: 12, service: 'test12', link: '/profile/12', image: '' },
        { id: 13, service: 'test13', link: '/profile/13', image: '' },
        { id: 14, service: 'test14', link: '/profile/14', image: '' },
        { id: 15, service: 'test15', link: '/profile/15', image: '' },
        { id: 16, service: 'test16', link: '/profile/16', image: '' },
        { id: 17, service: 'test17', link: '/profile/17', image: '' },
        { id: 18, service: 'test18', link: '/profile/18', image: '' },
        { id: 19, service: 'test19', link: '/profile/19', image: '' },
        { id: 20, service: 'test20', link: '/profile/20', image: '' },
        { id: 21, service: 'test21', link: '/profile/21', image: '' },
        { id: 22, service: 'test22', link: '/profile/22', image: '' },
        { id: 23, service: 'test23', link: '/profile/23', image: '' },
        { id: 24, service: 'test24', link: '/profile/24', image: '' },
        { id: 25, service: 'test10', link: '/profile/10', image: '' },
        { id: 26, service: 'test11', link: '/profile/11', image: '' },
        { id: 27, service: 'test12', link: '/profile/12', image: '' },
        { id: 28, service: 'test13', link: '/profile/13', image: '' },
        { id: 29, service: 'test14', link: '/profile/14', image: '' },
        { id: 30, service: 'test15', link: '/profile/15', image: '' },
        { id: 31, service: 'test16', link: '/profile/16', image: '' },
        { id: 32, service: 'test17', link: '/profile/17', image: '' },
        { id: 33, service: 'test18', link: '/profile/18', image: '' },
        { id: 34, service: 'test19', link: '/profile/19', image: '' },
        { id: 35, service: 'test20', link: '/profile/20', image: '' },
        { id: 36, service: 'test21', link: '/profile/21', image: '' },
        { id: 37, service: 'test22', link: '/profile/22', image: '' },
        { id: 38, service: 'test23', link: '/profile/23', image: '' },
        { id: 39, service: 'test24', link: '/profile/24', image: '' },
        { id: 40, service: 'test10', link: '/profile/10', image: '' },
        { id: 41, service: 'test11', link: '/profile/11', image: '' },
        { id: 42, service: 'test12', link: '/profile/12', image: '' },
        { id: 43, service: 'test13', link: '/profile/13', image: '' },
        { id: 44, service: 'test14', link: '/profile/14', image: '' },
        { id: 45, service: 'test15', link: '/profile/15', image: '' },
        { id: 46, service: 'test16', link: '/profile/16', image: '' },
        { id: 47, service: 'test17', link: '/profile/17', image: '' },
        { id: 48, service: 'test18', link: '/profile/18', image: '' },
        { id: 49, service: 'test19', link: '/profile/19', image: '' },
        { id: 50, service: 'test20', link: '/profile/20', image: '' },
        { id: 51, service: 'test21', link: '/profile/21', image: '' },
        { id: 52, service: 'test22', link: '/profile/22', image: '' },
        { id: 53, service: 'test23', link: '/profile/23', image: '' },
        { id: 54, service: 'test24', link: '/profile/24', image: '' },
        // Add more items if needed
    ];

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(allTypes.length / ITEMS_PER_PAGE);

    // Determine the items to display for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const visibleItems = allTypes.slice(startIndex, endIndex);

    // Handle pagination button click
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            {/* <h1 className="text-center text-2xl mb-10">Top Category</h1> */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleItems.map((t) => (
                    <Card key={t.id} data={t} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`mx-2 px-4 py-2 rounded ${
                            currentPage === index + 1
                                ? 'bg-black text-white'
                                : 'bg-gray-300 text-black'
                        }`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}

export default ViewAll;
