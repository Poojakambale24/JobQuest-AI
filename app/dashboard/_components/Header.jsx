"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path);
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
    {/* <Image src={'//AceaI.svg'} width={120} height={100} alt='logo'/> */}
    <div className="logo">
          <a href="/" className="logo-icon">
            <img
              src="/logonew1.png"
              alt="AceAi Logo"
              className="logo-image w-24 h-auto" 
              style={{ width: '110px', height: '35px' }} 
            />
          </a>
        </div>
    <ul className='hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'&&'text-primary font-bold'}`}>Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/Questions'&&'text-primary font-bold'}`}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/Upgrade'&&'text-primary font-bold'}`}>Features</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/How it Works?'&&'text-primary font-bold'}`}>How it Works?</li>
    </ul>
    <UserButton/>
    </div>
  )
}

export default Header