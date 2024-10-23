"use client"

import React, { useState } from 'react';
import Card from "@/app/components/Card"; // Fixed typo in import
import Link from 'next/link';

// Define a type for the service data
interface ServiceType {
    id: number;
    service: string;
    link: string;
    image: string;
}

function TopCategory() {
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
    ];

    const [visibleCount, setVisibleCount] = useState(8); // State to keep track of visible cards

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 8, allTypes.length)); // Load 8 more cards, capped at total length
    };

    return (
        <div className="w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 m-auto py-16">
            <h1 className="text-center text-2xl mb-10">Top Cat</h1>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allTypes.slice(0, visibleCount).map((t) => (
                    <Card key={t.id} data={t} />
                ))}
            </div>
            {visibleCount < allTypes.length && ( // Show Load More button if there are more cards
                <div className="w-full flex">
                    <button
                        className="m-auto bg-black hover:bg-gray-500 text-white h-10 px-6 rounded-3xl mt-5"
                        onClick={handleLoadMore} // Handle button click
                    >
                        Load More
                    </button>
                </div>
            )}
            {visibleCount >= 24 && ( // Show View All button when at least 24 cards are loaded
                <div className="w-full flex">
                    <Link href="/view-all" className="m-auto flex bg-black hover:bg-gray-500 text-white h-10 px-6 rounded-3xl mt-5">
                        <p className='m-auto'>
                            View All
                        </p>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default TopCategory;
