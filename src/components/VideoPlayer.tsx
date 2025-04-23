"use client";
import { FoldHorizontal, UnfoldHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Button, buttonVariants } from "./ui/button";
import useVideoProps from "@/store/useVideoProps";

const VideoPlayer = () => {
    const ref = useRef<ReactPlayer | null>(null);
    const [watched, setWatched] = useState(false);
    const {isVideoWide, toggleWide} = useVideoProps();
  
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
    <div className={`course-video w-full h-fit sticky top-0 z-20 ${isVideoWide? "md:sticky":"md:relative"}`}>
      <div className={`w-full aspect-video ${isVideoWide? "h-[65vh]":"md:aspect-video"} overflow-hidden rounded-lg drop-shadow-md`}>
          <ReactPlayer width={"100%"} height={"100%"} style={{position:"absolute", top:0,left:0}} ref={ref} url={"https://www.youtube.com/watch?v=54ls40kio2w"} controls onProgress={(progress)=> isFinished(progress)} />
      </div>
          <Button onClick={toggleWide} className={`absolute -bottom-10 right-4 !rounded-full cursor-pointer hidden md:block drop-shadow-md`} variant={"outline"}>
            {
              isVideoWide
              ? <FoldHorizontal />
              : <UnfoldHorizontal />
            }
          </Button>
    </div>
  )
}

export default VideoPlayer