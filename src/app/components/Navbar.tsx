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
                    <Link href="/" className="mx-4 hover:text-gray-300 md:hover:text-blue-700">
                        Beranda
                    </Link>
                    <div className="relative">
                        <button className="flex items-center justify-between w-full py-2 px-3 text-gray-300 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                            Profil
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li aria-labelledby="dropdownNavbarLink">
                                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown
                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Profil Security
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="/" className="mx-4 hover:text-gray-300 md:hover:text-blue-700">
                        Pendidikan
                    </Link>
                    <Link href="/" className="mx-4 hover:text-gray-300 md:hover:text-blue-700">
                        Penelitian dan Pengabdian
                    </Link>
                    <Link href="/" className="mx-4 hover:text-gray-300 md:hover:text-blue-700">
                        Kemahasiswaan
                    </Link>
                    <Link href="/" className="mx-4 hover:text-gray-300 md:hover:text-blue-700">
                        Informasi
                    </Link>
                    <Link href="/" className="mr-20 mx-4 hover:text-gray-300 md:hover:text-blue-700">
                        Layanan
                    </Link>

                </div>

            </div>

        </nav>

    )
}

export default Navbar