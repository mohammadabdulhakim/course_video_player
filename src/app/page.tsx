"use client";

import Header from "@/components/Header";
import Topics from "@/components/Topics";
import VideoPlayer from "@/components/VideoPlayer";
import useVideoProps from './../store/useVideoProps';

export default function Home() {
  const {isVideoWide} = useVideoProps();
 
  return (
    <main>
      <Header />

        <div className="course-page" 
        style={isVideoWide ?{
          gridTemplateColumns: "1fr", 
          gridTemplateAreas: `
            "video"
            "materials"
            "topics"
            "comments"`
          }:{}}>
          <VideoPlayer />
          <Topics />        
          <div className="course-materials">courseMaterial</div>
          <div className="course-comments">Comments</div>
        </div>
    </main>
  );
}
