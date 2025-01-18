"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';

function Interview({params}) {

    const [interviewData,setInterviewData]=useState();
    const [webCamEnabled,setWebCamEnabled]=useState(false);
    useEffect(()=>{
        console.log(params.interviewId);
        GetInterviewDetails();
    },[])

    /**
     * used to get interview Details by MockId/Interview Id
     */

        const GetInterviewDetails=async()=>{
            const result=await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId,params.interviewId))

            setInterviewData(result[0]);
        }


  return (
    <div className='my-10 bg-gray-800 border rounded-lg p-8 '>
        <h2 className='font-bold text-stone-300 text-2xl '>Let's Get Started</h2>

        <div className="grid grid-cols-4 gap-10">
  {/* First part: Two grid columns */}
          <div className="col-span-2 flex flex-col gap-4 border border-black rounded-lg bg-zinc-700">
              <div className=" p-6 rounded-lg gap-10  grid-cols-1 space-y-[10px] ">
              <div className='bg-stone-300 p-2 text-black rounded-md'><h2 className="text-lg"><strong>Preferred Role/Job Position: </strong>{interviewData?.jobPosition}</h2></div>
              <div className='bg-stone-300 p-2 text-black rounded-md'><h2 className="text-lg"><strong>Job Description/Tech Stack: </strong>{interviewData?.jobDesc}</h2></div>
              <div className='bg-stone-300 p-2 text-black rounded-md'><h2 className="text-lg"><strong>Years of Experience: </strong>{interviewData?.jobExperience}</h2></div>
              </div>
          </div>

  {/* Second part: One grid column */}
          <div className="col-span-2 p-5 border rounded-lg bg-[#F5F5DC]">
             <h2 className="flex gap-2 items-center text-[#FFC107]"><Lightbulb /> <strong className='text-[#424242]'>Information</strong></h2>
             <h2 className="mt-3 text-[#2E3A59]">{process.env.NEXT_PUBLIC_INFORMATION}</h2>
          </div>
        </div>

            <div>
            {webCamEnabled? <Webcam 
            onUserMedia={()=>setWebCamEnabled(true)}
            onUserMediaError={()=>setWebCamEnabled(false)}
            mirrored={true}
            style={{
                height:300,
                width:300
            }}
            />
            :
            <>
            <WebcamIcon className='h-80 w-[600px] ml-32  my-7 p-20  rounded-lg border bg-gray-900'/>
            <Button variant="ghost" className="w-[600px] ml-32 text-gray-200 bg-slate-600" onClick={()=>setWebCamEnabled(true)}>Enable web Cam and Microphone</Button>
            </>
            }
            </div>
        

        <div className='flex justify-end items-end m-4'>
            <Link href={'/dashboard/interview/'+params.interviewId+'/start'}> <Button className="border bg-slate-950 text-zinc-300 hover:text-black hover:bg-slate-700">Start Interview</Button></Link>
        </div>
    </div>
  )
}

export default Interview