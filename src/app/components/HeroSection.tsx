import React from 'react'
import './HeroSection.css'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <Image src="/images/background-rektorat.png" alt='bg-rektorat' width={1920} height={1080}/>
    
    </div>
  )
}

export default HeroSection
