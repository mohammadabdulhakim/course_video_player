import { topics } from "@/data/dummy";
import { toast } from "sonner";
import { create } from "zustand";
import { getSuitableMessage } from "@/constants/constants";

type Store = {
  topics: Topic[];
  userProgress: number;
  markAsDone: (id: number) => void;
};

const updateLocalStorage = (topics: Topic[], newProgress:number) => {
  localStorage.setItem("topics", JSON.stringify(topics));
  localStorage.setItem("userProgress", JSON.stringify(newProgress));
};

const useTopicsStore = create<Store>()((set) => ({
  topics:
    (localStorage.getItem("topics") &&
      JSON.parse(localStorage.getItem("topics") || "")) ||
    topics,
  userProgress:
    (localStorage.getItem("userProgress") &&
      JSON.parse(localStorage.getItem("userProgress") || "")) ||
    40,
  markAsDone: (id) => {
    return set((state) => {
      state.topics.forEach((topic) => {
        topic.subTopics.forEach((subTopic) => {
          if (subTopic.id == id) {
            subTopic.type == "video"
              ? (subTopic.status = "Watched")
              : subTopic.type == "exam"
              ? (subTopic.status = "Done")
              : (subTopic.status = "Read");
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
}));

export default useTopicsStore;
