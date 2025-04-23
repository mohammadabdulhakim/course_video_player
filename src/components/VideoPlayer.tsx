"use client";
import { FoldHorizontal, UnfoldHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { buttonVariants } from "./ui/button";

const VideoPlayer = () => {
    const ref = useRef<ReactPlayer | null>(null);
    const [watched, setWatched] = useState(false);
  
    const isFinished = (progress: any) => {
      if(ref.current){
        const duration = ref.current.getDuration();
        const currentProgress = progress.playedSeconds;
        
        if(currentProgress/duration >= 0.8 && !watched) setWatched(true);
      }
    }
  
    useEffect(()=>{
      console.log(watched);
    },[watched])
  return (
    <div className="w-full h-fit relative">
      <div className=" w-full h-[470px] overflow-hidden rounded-lg drop-shadow-md">
          <ReactPlayer width={"100%"} height={"100%"} ref={ref} url={"https://www.youtube.com/watch?v=54ls40kio2w"} controls onProgress={(progress)=> isFinished(progress)} />
      </div>
          <div className={`absolute -bottom-10 right-4 !rounded-full cursor-pointer ${buttonVariants({size: "sm"})}`}>
            <UnfoldHorizontal />
            {/* <FoldHorizontal /> */}
          </div>
    </div>
  )
}

export default VideoPlayer