import React from 'react'
import { Button } from './ui/button'
import { ChartColumn, CircleHelp, LandPlot, MessageSquareText } from 'lucide-react'
import { useRouter } from 'next/navigation'
import usePopupProps from '@/store/usePopupProps'

const CourseActionButtons = () => {
  const router = useRouter();
  const {toggleOpen} = usePopupProps();

  return (
    <div className="flex gap-4 course-action-buttons">
        <Button
          onClick={()=>{router.push("#topics")}}
          className={`!rounded-full cursor-pointer drop-shadow-md`}
          variant={"outline"}
        >
          <LandPlot />
        </Button>
        <Button
          onClick={()=>{router.push("#comments")}}
          className={`!rounded-full cursor-pointer drop-shadow-md`}
          variant={"outline"}
        >
          <MessageSquareText />
        </Button>
        <Button
          onClick={()=>{toggleOpen("askQuestion")}}
          className={`!rounded-full cursor-pointer drop-shadow-md`}
          variant={"outline"}
        >
          <CircleHelp />
        </Button>
        <Button
          onClick={()=>{toggleOpen("board")}}
          className={`!rounded-full cursor-pointer drop-shadow-md`}
          variant={"outline"}
        >
          <ChartColumn />
        </Button>
        
      </div>
  )
}

export default CourseActionButtons