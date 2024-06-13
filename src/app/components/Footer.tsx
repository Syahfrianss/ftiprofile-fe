import React from 'react'
import Image from 'next/image'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container ">
            <div className="footer-left">
                <a className="flex title-font font-medium items-center" href="/">
                    <Image src="/images/FTI-Logogram-Text.png" alt="FTI" width={250} height={80} className="w-250 h-50 text-white ml-7 mb-7" />
                </a>
                <p className='font-bold text-xs'>ADDRESS</p>
                <p className='font-bold text-xs'>Jl. Terusan Dieng No.57-59, Pisang Candi, Kec. Sukun, Kota Malang, Jawa Timur 65146</p>
                <br/>
                <p className='font-bold text-xs'>Phone</p>
                <p className='font-bold text-xs'>(0341) 566462</p>
                <br/>
                <p className='font-bold text-xs'>Email</p>
                <p className='font-bold text-xs'>fti@unmer.ac.id</p>
            </div>
            <div className="footer-center">
                <h4 className='font-bold text-base'>Fakultas Teknologi Informasi</h4>
                <br/>
                <ul>
                    <li>
                        <a href="https://si.unmer.ac.id/" className='font-bold text-xs'>Program Studi S1 Sistem Informasi</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold text-xs'>Program Studi D3 Sistem Informasi</a>
                    </li>
                </ul>
            </div>
            <div className="footer-right">
                <h4 className='font-bold text-base'>Laboratorium</h4>
                <br/>
                <ul>
                    <li>
                        <a href="#" className='font-bold text-xs'>Laboratorium Application Development</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold text-xs'>Laboratorium Data Analysis</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold text-xs'>Laboratorium IT Infrastruktur</a>
                    </li>
                    <li>
                        <a href="#" className='font-bold text-xs'>Laboratorium Management of Information System</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
