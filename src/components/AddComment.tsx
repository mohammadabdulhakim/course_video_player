"use client";

import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"
import { useState } from "react"

const AddComment = ({placeholder, action}:{placeholder:string, action: (text:string)=> void}) => {
  const [text, setText] = useState("");

  return (
    <div className="w-full flex flex-col items-start gap-4">
        <Textarea value={text} onChange={(e)=> setText(e.target.value)} placeholder={placeholder} className="w-full min-h-36 drop-shadow-2xl hover:drop-shadow-md !text-[16px]" />
        <Button onClick={()=>{action(text); setText("");}} className="bg-teal-500 hover:bg-teal-600 cursor-pointer" size={'lg'}>
            Submit
        </Button>
    </div>
  )
}

export default AddComment;