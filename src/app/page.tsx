"use client";

import Header from "@/components/Header";
import Topics from "@/components/Topics";
import VideoPlayer from "@/components/VideoPlayer";
import useVideoProps from './../store/useVideoProps';
import CourseMaterials from "@/components/CourseMaterials";
import CourseComments from "@/components/CourseComments";

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
          <CourseMaterials />
          <CourseComments />
        </div>
    </main>
  );
}
