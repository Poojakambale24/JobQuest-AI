"use client"

import Head from 'next/head';
import { useRouter } from 'next/navigation';

import '@fortawesome/fontawesome-free/css/all.min.css';



// Navigate to the sign-in page (login page)
const handleNavigation = () => {
  router.push("/auth/sign-in");
};

export default function Home() {

const router = useRouter();
  return (
    <>
      <Head>
        <title>AceAI</title>
        <meta name="description" content="Artificial Intelligence Landing Page" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="icon" href="/JQLogo.png" type='image/png' />
      </Head>

      <header className='sticky top-0 flex gap-10 p-5 items-center justify-between bg-transparent border border-gray-900 shadow-sm ' >
  
      <div className='justify-center items-center gap-2 ml-5  '>
           <h2 className="text-xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r
            from-slate-400 via-violet-600 to-fuchsia-800 animate-magic " >
            JobQuest</h2>
           <h6 className='border-2 border-y-slate-700 ml-6  rounded-sm h-4 w-8 text-xs font-bold 
           flex justify-center items-center text-primary bg-zinc-900 '>AI</h6>
    </div>

      <div className='flex justify-end'>
      <ul className='hidden md:flex  gap-6 font-bold text-gray-400'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer `}>Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer `}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer `}>Features</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer `}>How it Works?</li>
      </ul>
      </div>

        {/* Header Actions (Sign Up button and theme toggle) */}
        <div className="header-actions flex items-center space-x-4">
          <button
           onClick={()=>router.replace('/dashboard')}
            className="bg-gray-300 text-black py-2 px-4 rounded-md"
          >
            Sign in
          </button>
        </div>
      </header>

      <div className="bg-gradient-to-b  min-h-screen flex items-center justify-center text-white ">
        <div className="max-w-screen-xl w-full flex items-center justify-between px-10 ml-16">
          {/* Left side text */}
          <div className="text-left space-y-6 w-1/2">
            <h1 className="text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-slate-400  via-violet-600 to-red-700">Elevate Your Interview Skills with AI🤖</h1>
            <p className="text-lg max-w-2xl text-gray-400 font-bold">
            Welcome to JobQuest AI, your smart assistant for confident job interviews.
            Enhance your interview preparation with our AI-powered mock interviews.
            </p>
            <button
               onClick={() => router.replace('/dashboard')}
               className="bg-gray-300 text-black py-2 px-8 rounded-full text-lg font-bold hover:bg-zinc-600" >
               Start Your Interview Prep✨ 
            </button>
          </div>

          {/* <div className='mt-5 text-center items-center'>
        <div className='justify-center items-center gap-2 ml-10'>
          <h2 className="ml-6 text-xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-purple-950 to-pink-400 animate-magic">JQ</h2>
          <h6 className='border-2 border-y-slate-700 ml-6 rounded-sm h-4 w-8 text-xs font-bold flex justify-center items-center text-primary bg-zinc-900'>AI</h6>
        </div>
      </div> */}

          {/* Right side animated image */}
          <div className="w-1/2 flex justify-end mr-20 ">
            <div className="animate-pulse">
              <img
                src="/artificial-intelligence (1).png"
                alt="AI Illustration"
                className="w-full h-auto max-w-xs"
              />
            </div>
          </div>
        </div> 
      </div>

      {/* box get started */}
      <div className='-mt-20  mb-4 ml-28 mr-28 p-20 gap-10 text-white font-bold text-2xl text-center bg-gradient-to-r from-slate-500 via-slate-900 to-sky-950 rounded-lg shadow-lg animate-gradient bg-[length:100%_100%]'>
      <div className='items-center '>
        <h2 className='text-5xl text-center font-bold p-4'>"Get ready to take your interview skills to the next level!"</h2>
         <button
               onClick={() => router.replace('/dashboard')}
               className="bg-gray-300 gap-4 text-black  py-2 px-8 rounded-full text-lg font-bold hover:bg-zinc-600" >
               Try a free mock interview Now✨ 
            </button>
      </div>
      </div>

      {/* for all job roles */}

      <div className='text-center m-20'>
        <h2 className='text-3xl font-bold text-slate-200'>Works for every type of job interview and role</h2>
        <h2 className='text-lg'>Provide your own job description or choose from our sample roles.</h2>
      </div>


      <div className="flex   ml-24 -mt-10 gap-8">
  {/* First column with text */}
  <div className="flex-1 w-[20%] ml-5 items-center p-10">
    <h2 className='text-2xl  text-left '>
      "This AI mock interview platform is ideal for various fields, including Android development, web development, and more. It helps you prepare for interviews by simulating real-life questions and providing instant feedback."
    </h2>
  </div>

  {/* Second column with buttons in 3 columns */}
  <div className="flex-1 w-[80%] grid grid-cols-2 gap-4 mr-24">
    <div className='bg-gray-800 p-3 border items-center rounded-sm'>
      <button className="flex items-center space-x-2 gap-1 py-2 px-4 rounded-lg">
        <img src="icons8-web-development-64.png" alt="Web Developer Logo" className="w-7 h-7 rounded-sm" />
        <span className="text-lg font-semibold">Web Developer</span>
      </button>
    </div>

    <div className='bg-gray-800 p-2 border rounded-sm'>
      <button className="flex items-center space-x-2 gap-1 py-2 px-4 rounded-lg">
        <img src="icons8-android-os-48.png" alt="Android Developer Logo" className="w-7 h-7 rounded-sm" />
        <span className="text-lg font-semibold">Android Developer</span>
      </button>
    </div>

    <div className='bg-gray-800 p-2 border rounded-sm'>
      <button className="flex items-center space-x-2 gap-1 py-2 px-4 rounded-lg">
        <img src="icons8-java-64.png" alt="Java Developer Logo" className="w-7 h-7 rounded-sm" />
        <span className="text-lg font-semibold">Java Developer</span>
      </button>
    </div>

    <div className='bg-gray-800 p-2 border rounded-sm'>
      <button className="flex items-center space-x-2 gap-1 py-2 px-4 rounded-lg">
        <img src="icons8-python.gif" alt="Python Developer Logo" className="w-7 h-7 rounded-sm" />
        <span className="text-lg font-semibold">Python Developer</span>
      </button>
    </div>

    <div className='bg-gray-800 p-2 border rounded-sm'>
      <button className="flex items-center space-x-2 gap-1 py-2 px-4 rounded-lg">
        <img src="icons8-devops-60.png" alt="DevOps Logo" className="w-7 h-7 rounded-sm" />
        <span className="text-lg font-semibold">DevOps Engineer</span>
      </button>
    </div>

    <div className='bg-gray-800 p-2 border rounded-sm'>
      <button className="flex items-center space-x-2 gap-1 py-2 px-4  rounded-lg">
        <img src="mern.png" alt="Mern Stack Developer Logo" className="w-7 h-7 rounded-sm" />
        <span className="text-lg font-semibold">Mern Stack Developer</span>
      </button>
    </div>
  </div>
</div>

<div className='flex gap-4 items-center text-center m-28'>
        <h2 className='text-3xl font-bold text-slate-200'>Discover the steps to effortlessly navigate and utilize our platform</h2>
        <img src="icons8-arrow-50.png" alt="start" className="h-8 "/>
      </div>
      {/* steps */}
      <div className='-mt-14 '>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gradient-to-r from-slate-500 via-slate-700 to-gray-900  animate-gradient bg-[length:100%_100%] gap-4 p-6 rounded-lg shadow-lg">
            <h2 className=" text-black text-xl font-bold mb-4">Sign in with JobQuest AI</h2>
            <p className=" text-gray-400">Create an account or sign in to begin your AI-powered interview journey.</p>
            <img src='Authantication.png' alt="authantication" className='rounded-lg h-48 w-80 items-center' />
          </div>

          <div className="bg-gradient-to-r from-slate-500 via-slate-700 to-gray-900    animate-gradient bg-[length:100%_100%]  gap-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-black text-xl font-bold mb-4">Add Job Preferences</h2>
            <p className="text-gray-400">Specify your preferred role, job description, and years of experience.</p>
            <img src='JobPreference.png' alt="authantication" className='rounded-lg h-48 w-80 items-center' />
          </div>

          <div className="bg-gradient-to-r from-slate-500 via-slate-700 to-gray-900  animate-gradient bg-[length:100%_100%] gap-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-black text-xl font-bold mb-4">Read and Follow Up</h2>
            <p className="text-gray-400">Receive interview details and follow the steps to start your mock interview.</p>
            <img src='WebCamImage.png' alt="authantication" className='rounded-lg h-48 w-80 items-center' />
          </div>

          <div className="bg-gradient-to-r from-slate-500 via-slate-700 to-gray-900   animate-gradient bg-[length:100%_100%] gap-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-black text-xl font-bold mb-4">AI-Generated Questions</h2>
            <p className="text-gray-400">The AI will generate interview questions based on your provided information.</p>
            <img src='EnableWencam.png' alt="authantication" className='rounded-lg h-56 w-80 items-center' />
          </div>

          <div className="bg-gradient-to-r from-slate-500 via-slate-700 to-gray-900   animate-gradient bg-[length:100%_100%] gap-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-black text-xl font-bold mb-4">Record Your Answers</h2>
            <p className="text-gray-400">Use your webcam to record answers to each interview question.</p>
            <img src='MainCam.png' alt="authantication" className=' rounded-lg h-56 w-80 items-center' />
          </div>
   
          <div className="bg-gradient-to-r from-slate-500 via-slate-700 to-gray-900  animate-gradient bg-[length:100%_100%]gap-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-black text-xl font-bold mb-4">AI Feedback & Rating</h2>
            <p className="text-gray-400">Receive ratings, feedback, and correct answers generated by AI based on your responses.</p>
            <img src='FeedBackPage.png' alt="authantication" className='rounded-lg h-56 w-80 items-center' />
          </div>
        </div>
     </div>
  </div>
      
  <footer className=" text-white py-6">
      <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold mt-2  text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-900 to-pink-400">JobQuest AI</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com" className="text-white">
            <i className="fab fa-github fa-1x"></i>
          </a>
          <a href="https://instagram.com" className="text-white">
            <i className="fab fa-instagram fa-1x"></i>
          </a>
          <a href="https://linkedin.com" className="text-white">
            <i className="fab fa-linkedin fa-1x"></i>
          </a>
          <a href="https://google.com" className="text-white">
            <i className="fab fa-google fa-1x"></i>
          </a>
          <a href="https://facebook.com" className="text-white">
            <i className="fab fa-facebook fa-1x"></i>
          </a>
        </div>
{/*         
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#news" className="hover:underline">Questions</a>
          <a href="#about" className="hover:underline">features</a>
          <a href="#contact" className="hover:underline">How it works</a>
        </div> */}

        <div className="text-center text-stone-400 text-sm">
          <p>© 2025 JobQuest AI. @pooja kambale.</p>
        </div>
      </div>
    </footer>
    </>
    
  );
}



