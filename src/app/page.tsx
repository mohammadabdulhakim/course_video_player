"use client";

import Header from "@/components/Header";
import Topics from "@/components/Topics";
import VideoPlayer from "@/components/VideoPlayer";
import useVideoProps from "./../store/useVideoProps";
import CourseMaterials from "@/components/CourseMaterials";
import CourseComments from "@/components/CourseComments";
import usePopupProps from "@/store/usePopupProps";
import PopupPDF from "@/components/popups/PopupPDF";
import PopupExam from "@/components/popups/PopupExam";
import CourseActionButtons from "@/components/CourseActionButtons";
import PopupBoard from "@/components/popups/PopupBoard";

export default function Home() {
  const { isVideoWide } = useVideoProps();
  const { openedType } = usePopupProps();

  return (
    <main>
      <Header />

      <div
        className="course-page"
        style={
          isVideoWide
            ? {
                gridTemplateColumns: "1fr",
                gridTemplateAreas: `
            "video"
            "materials"
            "topics"
            "comments"`,
              }
            : {}
        }
      >
        <VideoPlayer />
        <CourseActionButtons />
        <Topics />
        <CourseMaterials />
        <CourseComments />
      </div>
      {openedType == "exam" ? (
        <PopupExam />
      ) : openedType == "pdf" ? (
        <PopupPDF />
      ) : openedType == "askQuestion" ? (
        "fsdffsfdfs"
      ) : (
        openedType == "board" && <PopupBoard />
      )}
    </main>
  );
}
