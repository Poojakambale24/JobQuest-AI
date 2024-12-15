"use client"

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Toggle between light and dark theme
const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
  document.body.classList.toggle("dark", theme === "light");
};

// Navigate to the sign-in page (login page)
const handleNavigation = () => {
  router.push("/auth/sign-in");
};

export default function Home() {
  const [theme, setTheme] = useState("light");
const router = useRouter();
  return (
    <>
      <Head>
        <title>AceAI</title>
        <meta name="description" content="Artificial Intelligence Landing Page" />
        <link rel="icon" href="/AceaI_icon.png" type='image/png' />
      </Head>

      <header className="header p-4 flex justify-between  items-center bg-gray-100 dark:bg-gray-700 bg-slate-500" style={{ backgroundColor:'bg-' }}>
        {/* Logo */}
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

        {/* Header Actions (Sign Up button and theme toggle) */}
        <div className="header-actions flex items-center space-x-4">
        
          <button
           onClick={()=>router.replace('/dashboard')}
            className="bg-primary text-white py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </header>

      <div className="bg-gradient-to-b from-zinc-400 via-white to-gray-400 min-h-screen flex items-center justify-center text-white ">
        <div className="max-w-screen-xl w-full flex items-center justify-between px-10 ml-5">
          {/* Left side text */}
          <div className="text-left space-y-6 w-1/2">
          <h1  className="text-3xl font-bold unique-font" style={{ 
               fontFamily: 'Poppins, sans-serif', 
               color: '#6F42C1', // Change this to your desired color
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', }}>
              Elevate Your Interview Skills with AI🤖
            </h1>
            <p className="text-lg max-w-2xl text-gray-600 font-bold">
            Welcome to AceAI, your smart assistant for confident job interviews.
            Enhance your interview preparation with our AI-powered mock interviews.
            </p>
            <button
      onClick={() => router.replace('/dashboard')}
      className="bg-primary text-white py-2 px-8 rounded-full text-lg font-bold hover:bg-primary"
    >
      Get Started✨ 
    </button>

          </div>

          {/* Right side animated image */}
          <div className="w-1/2 flex justify-end mr-12 ">
            <div className="animate-pulse">
              <img
                src="/artificial-intelligence (1).png"
                alt="AI Illustration"
                className="w-full h-auto max-w-xs"
              />
            </div>
          </div>
        </div>

        <footer className="absolute bottom-0 w-full text-center text-sm">
          <p>© 2024 AceAI.@pooja kambale.</p>
        </footer>
      </div>

      <style jsx>{`
        .animate-pulse {
          animation: pulse-animation 3s infinite ease-in-out;
          
        }

        @keyframes pulse-animation {
          0% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
        }
      `}</style>

      {/* <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style> */}
    </>
  );
}



