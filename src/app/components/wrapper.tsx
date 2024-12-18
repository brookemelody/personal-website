"use client"

import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
}

/*
Client-side wrapper component for the toggle, since layout.tsx
uses server side rendering
*/
export default function Wrapper({children}: WrapperProps) {
    return (
        <div className="">
            <div className="flex items-center justify-center">
                {/* 
                Use responsive variant modifiers to account for user's screen size and adjust styling accordingly to ensure that
                the website is readable on all types of screens and window sizes.

                md -> medium (and larger) screens
                sm -> small screens
                */}
                <div id="container" className="animate-loadContent md:w-3/5 sm:w-5/6 shadow-xl shadow-blue-300 dark:shadow-sky-900 rounded-lg md:px-20 md:py-10 sm:px-5 sm:py-3 mb-10 flex flex-col items-center bg-white dark:bg-gray-600">
                {children}
                </div>
            </div>
        </div>
    )
}