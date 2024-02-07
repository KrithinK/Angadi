import Link from 'next/link';
import React, { FC, SVGProps } from 'react';

export function Navbar() {
    return (
        <div>
            <header className="flex items-center justify-between px-6 py-4 bg-gray-300 shadow dark:bg-gray-700">
                <div className="flex items-center space-x-2">
                    <PharmacyIcon className="h-8 w-8 text-blue-400" />
                    <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">SV Pharma</h1>
                </div>
                <nav className="flex space-x-4">
                    <Link className="text-gray-500 hover:text-blue-400 dark:text-gray-200 dark:hover:text-blue-300" href="/">
                        Home
                    </Link>
                    <Link className="text-gray-500 hover:text-blue-400 dark:text-gray-200 dark:hover:text-blue-300" href="/invoiceTracker">
                        Invoice
                    </Link>
                    <Link className="text-gray-500 hover:text-blue-400 dark:text-gray-200 dark:hover:text-blue-300" href="/attendance">
                        Attendance
                    </Link>
                </nav>
            </header>
        </div>
    );
};



interface PharmacyIconProps extends SVGProps<SVGSVGElement> { }

const PharmacyIcon: FC<PharmacyIconProps> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2L2 7V22H22V7L12 2Z" />
            <path d="M9 22V12H15V22" />
            <path d="M9 12H15" />
            <path d="M12 16V12" />
        </svg>
    );
};

export default PharmacyIcon;
