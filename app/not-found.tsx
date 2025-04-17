'use client'

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#00b6d6] p-6 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Page Not Found</p>
            <Link
                href="/"
                className="text-[#00b6d6] border border-[#00b6d6] px-4 py-2 rounded hover:bg-[#00b6d6] hover:text-white transition"
            >
                Go back home
            </Link>
        </div>
    )
}
