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
    <div className='sticky top-0 flex gap-10 p-5 items-center justify-between bg-transparent border  border-gray-900 shadow-sm'>
  

      <div className='justify-center items-center gap-2 ml-8'>
           <h2 className="text-xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r
            from-slate-400 via-violet-600 to-fuchsia-800 animate-magic " >
            JobQuest</h2>
           <h6 className='border-2 border-y-slate-700 ml-6  rounded-sm h-4 w-8 text-xs font-bold 
           flex justify-center items-center text-primary bg-zinc-900 '>AI</h6>
       </div>


      <ul className='hidden md:flex gap-6 font-bold text-gray-400 ml-auto'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'&&'text-primary font-bold'}`}>Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/Questions'&&'text-primary font-bold'}`}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/Upgrade'&&'text-primary font-bold'}`}>Features</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/How it Works?'&&'text-primary font-bold'}`}>Feedback</li>
    </ul>
    <UserButton/>
    </div>
  )
}

export default Header