import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {
 const router=useRouter();
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }
  return (
    <div className=' shadow-sm rounded-lg p-5 bg-gray-800 space-x-1 space-y-2'>
        <div className='flex gap-2 text-lg'>
        <img src='icons8-code-48.png'alt='experience' className='h-9 w-9'/>
        <h2 className='font-bold text-slate-200'>{interview?.jobPosition} </h2>
        </div>
        <div className='flex gap-2 text-lg'>
        <img src='school_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.png'alt='experience' className='h-6 w-6'/>
        <h2 className='text-sm text-gray-400'>{interview?.jobExperience} Years of experience</h2>
        </div>
        <div className='flex gap-2 text-lg items-center'>
        <img src='schedule_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.png'alt='experience' className='h-6 w-6'/>
        <h2 className='text-xs text-gray-400'>Created At : {interview?.createdAt}</h2>
        </div>
        <div className='flex justify-between mt-2 gap-5'>
            <Button onClick={onFeedbackPress} size="sm" variant="outline" className='w-full bg-gray-800 border-sky-700 text-sky-700'>Feedback</Button>
            <Button onClick={onStart} size="sm" className="w-full border bg-slate-950 text-zinc-300 hover:text-black hover:bg-slate-700">Start</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard