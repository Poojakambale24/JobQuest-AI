"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle, 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from 'moment'
import { useRouter } from "next/navigation";
function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router=useRouter();
  const { user } = useUser();
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);
    const InputPrompt =
     "Job position: "+jobPosition+
     ", Job Description: "+jobDesc+
     ", Years of experience: "+jobExperience+
     ", Depends on Job Position,Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview questions along with answers in JSON format.";
    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp=(result.response.text()).replace('```json',' ').replace('```',' ');
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);
    if(MockJsonResp){
    const resp= await db.insert(MockInterview)
    .values({
        mockId:uuidv4(),
        jsonMockResp:MockJsonResp,
        jobPosition:jobPosition,
        jobDesc:jobDesc,
        jobExperience:jobExperience,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-yyyy'),
    }).returning({mockId:MockInterview.mockId});
    console.log("Inserted ID :",resp);
    if(resp){
      setOpenDialog(false);
      router.push('/dashboard/interview/'+resp[0]?.mockId);
  }
    }
    else{
        console.log("ERROR");
    }
    setLoading(false);
  }
  return (
    <div >
     <h2 className="text-2xl p-4 flex items-center gap-2 font-bold">Getting started
      <img src="icons8-arrow-50.png" alt="start" className="h-8 "/>
      </h2>
     <div className=" flex items-center gap-8">
        <div
          className="p-10 w-96  ml-1 rounded-lg bg-gray-800 hover:scale-105 hover:shadow-md cursor-pointer  transition-all"onClick={() => setOpenDialog(true)}>
          <h2 className="font-bold text-lg text-center">+ Add New</h2>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl border-none bg-zinc-950">
          <DialogHeader>
            <DialogTitle className="text-2xl">  
            Tell us more about your academic journey!
            </DialogTitle>
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <h3 className="font-semibold mb-4 text-slate-400">
              Add details about your Preferred position, description, and experience:
            </h3>
            <div className="mt-7 my-3">
              <label>Preferred Role/Job Position</label>
              <Input className="bg-zinc-900 border-none"
                placeholder="Ex. Web Developer"
                required
                onChange={(event) => setJobPosition(event.target.value)}  
              />
            </div>
            <div className="my-3">
              <label>Job Description/Tech Stack (In Short)</label>
              <Textarea className="bg-zinc-900 border-none"
                placeholder="Ex. React, Angular, NodeJs, MySQL, etc."
                required
                onChange={(event) => setJobDesc(event.target.value)}
              />
            </div>
            <div className="my-3">
              <label>Years of Experience</label>
              <Input className="bg-zinc-900 border-none"
                placeholder="Ex. 5"
                type="number"
                max="100"
                required
                onChange={(event) => setJobExperience(event.target.value)}
              />
            </div>
  
            <div className="flex gap-5 justify-end">
              <Button
                type="button"
                variant="ghost"
                className="bg-zinc-900"
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    Generating from AI
                  </>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
  
                }
export default AddNewInterview
