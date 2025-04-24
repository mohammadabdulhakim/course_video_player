"use client";

import React, { Suspense } from "react";
import CourseProgress from "./CourseProgress";
import TopicCard from "./TopicCard";
import useTopicsStore from "@/store/useTopicsStore";

const Topics = () => {
  const { topics, userProgress } = useTopicsStore();

  return (
    <div
      id="topics"
      className="course-topics flex items-start flex-col gap-10 "
    >
      <h2 className="text-2xl font-semibold">Topics for This Course</h2>
      <CourseProgress progress={userProgress} />

      {topics && topics.map((oneTopic) => (
        <Suspense fallback={<div>Loading...</div>}>
          <TopicCard key={crypto.randomUUID()} topic={oneTopic} />
        </Suspense>
      ))}
    </div>
  );
};

export default Topics;
