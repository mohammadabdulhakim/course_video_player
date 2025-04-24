"use client";
import { FoldHorizontal, UnfoldHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "./ui/button";
import useVideoProps from "@/store/useVideoProps";
import useTopicsStore from "@/store/useTopicsStore";
import { useSearchParams } from "next/navigation";
import { topics } from "@/data/dummy";

const VideoPlayer = () => {
    const ref = useRef<ReactPlayer | null>(null);
    const [watched, setWatched] = useState(0);
    const [src, setSrc] = useState("");
    const {isVideoWide, toggleWide} = useVideoProps();
    const {markAsDone} = useTopicsStore();

    const searchParams = useSearchParams();
    const currentId = Number(searchParams.get("id")) || 101;
  
    const isFinished = (progress: any) => {
      if(ref.current){
        const duration = ref.current.getDuration();
        const currentProgress = progress.playedSeconds;
        
        if(currentProgress/duration >= 0.8 && watched != currentId) setWatched(currentId);
      }
    }
  
    useEffect(()=>{
      if(watched == currentId) {
        markAsDone(currentId);
      }
    },[watched])

    useEffect(()=>{
      topics.forEach((topic) => {
        topic.subTopics.forEach((subTopic) => {
          if (subTopic.id == currentId) {
            setSrc(subTopic.src);
          }
        });
      });
    },[searchParams])
  return (
    <div className={`course-video w-full h-fit sticky top-0 z-20 ${isVideoWide? "md:sticky":"md:relative"}`}>
      <div className={`w-full aspect-video ${isVideoWide? "h-[480px]":"md:aspect-video"} overflow-hidden rounded-lg drop-shadow-md`}>
          <ReactPlayer width={"100%"} height={"100%"} style={{position:"absolute", top:0,left:0}} ref={ref} url={src} controls onProgress={(progress)=> isFinished(progress)} />
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