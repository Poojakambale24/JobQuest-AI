"use client";
import { SignIn } from '@clerk/nextjs';
import React, {  useState,useEffect } from 'react';

export default function Page() {
  const roles = [
    "Web Developer",
    "Android Developer",
    "Full Stack Developer",
    "Mern Stack Developer",
    "Data Analytics",
    "Java Developer",
    "Python Developer"
  ];
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setDisplayText(displayText + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
          setDisplayText('');
        }, 2000); // Pause before switching to the next role
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [displayText, charIndex, roleIndex, roles]);

  return (
    <section className="bg-slate-700">
     
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className=" h-8 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">

           
      <div className='mt-5'>
        <div className='justify-center items-center gap-2 ml-7'>
          <h2 className="text-xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-950 to-pink-400 animate-magic">JobQuest</h2>
          <h6 className='border-2 border-y-slate-700 ml-6 rounded-sm h-4 w-8 text-xs font-bold flex justify-center items-center text-primary bg-zinc-900'>AI</h6>
        </div>
      </div>

      <div className='mt-48 ml-5'>
        <section className="">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-violet-500 to-red-700">JobQuest AI</h1>
            <h2 className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-rose-950 to-black">{displayText}</h2>
            <p className="mt-6 ml-6 mr-4 text-lg text-gray-300">Empower your career journey with AI-driven insights and tailored interview preparation.</p>
          </div>
        </section>
      </div>

        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative  -mt-16 block lg:hidden"></div>
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
