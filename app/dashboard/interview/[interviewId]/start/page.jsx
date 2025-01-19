"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema'
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import { eq } from 'drizzle-orm';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({params}) {
    const [interviewData,setInterviewData]=useState();
    const [mockInterviewQuestion,setMockInterviewQuestion]=useState();
    const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
    useEffect(()=>{
        GetInterviewDetails();
    },[])
    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
        
        const jsonMockResp = JSON.parse(result[0].jsonMockResp);
        const interviewQuestions = jsonMockResp.interviewQuestions || [];
        console.log(interviewQuestions);
        setMockInterviewQuestion(interviewQuestions);
        setInterviewData(result[0]);
    }
  return (
    <div className='bg-gray-800 border rounded-lg '>
        <div className='grid grid-cols-1 md:grid-cols-1 m-4 gap-4 w-full -mt-8'>
            {/* Questions */}
                <QuestionsSection 
                mockInterviewQuestion={mockInterviewQuestion}
                activeQuestionIndex={activeQuestionIndex}
                />
            {/* Vedio/ Audio Recording */}
            <RecordAnswerSection 
             mockInterviewQuestion={mockInterviewQuestion}
             activeQuestionIndex={activeQuestionIndex}
             interviewData={interviewData}
            />
        </div>
        <div className='flex justify-end mr-9 -mt-24 mb-4  gap-6'>
          {activeQuestionIndex>0&&  
          <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}className="border bg-slate-950 text-zinc-300 hover:text-black hover:bg-slate-700" >Previous Question</Button>}
          {activeQuestionIndex!=mockInterviewQuestion?.length-1&&  
          <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)} className="border bg-slate-950 text-zinc-300 hover:text-black hover:bg-slate-700">Next Question</Button>}
           {activeQuestionIndex==mockInterviewQuestion?.length-1&& 
           <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
           <Button className="border border-[#B91C1C] bg-red-600  text-zinc-300 hover:text-black hover:bg-slate-700">End Interview</Button></Link>}
        </div>
    </div>
  )
}

export default StartInterview