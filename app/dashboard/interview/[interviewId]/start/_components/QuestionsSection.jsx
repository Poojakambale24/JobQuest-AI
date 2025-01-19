"use client"
import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {
    const textToSpeach=(text)=>{
        if('speechSynthesis' in window){
            const speech=new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        }
            else{
                alert('Sorry, Your browser does not support text to speech');
            }
        
    }
    const activeQuestion = mockInterviewQuestion?.[activeQuestionIndex];

  return mockInterviewQuestion&& (
    <div className=' grid grid-cols-3 mr-20 gap-8'>
     <div className='p-5 w-full col-span-2  rounded-lg my-10 '>
      
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-10'>
        {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => (
                <h2 key={index} className={`p-2 bg-secondary border bg-zinc-700 text-black rounded-sm w-28 text-xs md:text-sm text-center cursor-pointer 
                ${activeQuestionIndex==index&&'bg-stone-300 text-black '}`}>
                    Question #{index + 1}
                </h2>
            ))}
        </div>
        <h2 className='my-5 text-white text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
     </div>
         <div className=' col-span-1 mr-4'>
         <div className='border rounded-lg p-4  mt-14  h-44 w-72 bg-[#F5F5DC] '>
     <h2 className='flex gap-1 items-center text-[#FFC107]'>
         <Lightbulb/>
         <strong className='text-[#424242]'>Note:</strong>
     </h2>
     <h2 className='text-sm text-[#2E3A59]
 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
    </div>
        </div>   
</div>
  )
}

export default QuestionsSection