import { topics } from "@/data/dummy";
import { toast } from "sonner";
import { create } from "zustand";
import { getSuitableMessage } from "@/constants/constants";
import { Topic } from "@/types/TopicType";
import { useEffect, useState } from "react";

type Store = {
  topics: Topic[];
  userProgress: number;
  markAsDone: (id: number) => void;
};

const updateLocalStorage = (topics: Topic[], newProgress: number) => {
  typeof window !== undefined &&
    localStorage.setItem("topics", JSON.stringify(topics));
  typeof window !== undefined &&
    localStorage.setItem("userProgress", JSON.stringify(newProgress));
};


const useTopicsStore = create<Store>()((set) => {
  const [initialTopics, setInitialTopics] = useState<Topic[]>(topics);
  const [initialUserProgress, setInitialUserProgress] = useState(40);

  useEffect(()=>{
    if(typeof window !== undefined){
      const storedQuestions = localStorage.getItem("topics");
      const storedUserProgress = localStorage.getItem("userProgress");
      
      if(storedQuestions){
        setInitialTopics(JSON.parse(storedQuestions));
      }

      if(storedUserProgress){
        setInitialUserProgress(JSON.parse(storedUserProgress));
      }
  }
  },[])
  
  return {
  topics: initialTopics,
  userProgress: initialUserProgress,
  markAsDone: (id) => {
    return set((state) => {
      state.topics.forEach((topic) => {
        topic.subTopics.forEach((subTopic) => {
          if (subTopic.id == id) {
            if (subTopic.type == "video") {
              subTopic.status = "Watched";
            } else if (subTopic.type == "exam") {
              subTopic.status = "Done";
            } else {
              subTopic.status = "Read";
            }
          }
        });
      });

      const newProgress = state.userProgress + 3.5;
      updateLocalStorage(state.topics, newProgress);

      const suitableMessage = getSuitableMessage(newProgress);
      toast("The Lesson is marked as Watched. " + suitableMessage?.icon, {
        description:
          suitableMessage?.message || "Keep Going... Remember why you start",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      });
      return { topics: state.topics, userProgress: newProgress };
    });
  },
}});

export default useTopicsStore;
