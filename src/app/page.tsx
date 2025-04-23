"use client";

import Header from "@/components/Header";
import Topics from "@/components/Topics";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
 
  return (
    <main>
      <Header />

      <div className="flex flex-row justify-between py-2 md:py-4 px-2 md:px-4 lg:px-8 gap-6 lg:gap-10">
        <div className="flex flex-2 ">
          <VideoPlayer />
        </div>

        <Topics />        
      </div>
    </main>
  );
}
