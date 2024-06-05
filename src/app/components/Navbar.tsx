import React from "react"
import './Navbar.css'
import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return(
        <nav className="bg-blue-900 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a className="flex title-font font-medium items-center" href="/">

                    <Image src="/images/FTI-Logogram-Text.png" alt="FTI" width={250} height={80} className="w-250 h-50 text-white p-2" />
                </a>

                <div className="hidden md:flex">
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Beranda
                    </Link>
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Profil
                    </Link>
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Pendidikan
                    </Link>
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Penelitian dan Pengabdian
                    </Link>
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Kemahasiswaan
                    </Link>
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Informasi
                    </Link>
                    <Link href="/" className="mx-2 hover:text-gray-300">
                        Layanan
                    </Link>

                </div>

            </div>

        </nav>

    )
}

export default Navbar