"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
function Feedback({params}) {
    const [feedbackList,setFeedbackList]=useState([]);
    const router=useRouter();
    useEffect(()=>{
        GetFeedback();
    },[])
    const GetFeedback=async()=>{
        const result=await db.select().from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef,params.interviewId))
        .orderBy(UserAnswer.id)
        console.log(result)
        setFeedbackList(result)
    }
  return (
    <div className='p-10 bg-gray-800 border rounded-md'>

        {feedbackList?.length==0?
        <h2 className='font-bold text-xl  text-gray-500'>🚫📄 No interview feedback Recorded Found</h2>
        :
        <>
        <h2 className='text-3xl font-bold text-center text-[#1d85b1]'>🎉Congratulations!</h2>
        <h2 className='font-bold text-2xl text-center text-[#7DD3FC]'>💬 Here is your interview Feedback</h2>
        <h2 className='  text-lg my-3 text-center text-[#FACC15]'>⭐ Your overall interview rating: <strong> 7/10</strong></h2>
         <h2 className='text-sm text-center text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2> 
         
         {feedbackList&&feedbackList.map((item,index)=>(
            <Collapsible key={index} className='mt-7'>
            <CollapsibleTrigger className='p-2 bg-gray-900 rounded-lg flex justify-between my-2 text-left gap-7 w-full'>{item.question}<ChevronsUpDownIcon className='h-5 w-5'/> </CollapsibleTrigger>
            <CollapsibleContent>
             <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2  bg-slate-200 border rounded-lg'><strong>Rating: </strong>{item.rating}</h2>
                <h2 className='p-2 border rounded-lg  bg-slate-200 text-sm text-red-800'> <strong>Your Answer: </strong>{item.userAns}</h2>
                <h2 className='p-2 border rounded-lg  bg-slate-200 text-sm text-green-800'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                <h2 className='p-2 border rounded-lg bg-blue  text-sm text-[#94A3B8]'><strong className='text-stone-300'>Feedback: </strong>{item.feedback}</h2>
             </div>
            </CollapsibleContent>
          </Collapsible>    
         ))}  
         </>}
         <Button onClick={()=>router.replace('/dashboard')} className="border bg-slate-950 text-zinc-300 hover:text-black hover:bg-slate-700 ">Go Home</Button>
    </div>
  )
}

export default Feedback