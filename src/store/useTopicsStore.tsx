import { topics } from "@/data/dummy";
import { create } from "zustand";

type Store = {
  topics: Topic[];
  markAsDone: (id: number) => void;
};

const updateLocalStorage = (topics: Topic[]) => {
  localStorage.setItem("topics", JSON.stringify(topics));
};

const useTopicsStore = create<Store>()((set) => ({
  topics:
    (localStorage.getItem("topics") &&
      JSON.parse(localStorage.getItem("topics") || "")) ||
    topics,
  markAsDone: (id) => {
    return set((state) => {
      state.topics.forEach((topic, topicIndex) => {
        topic.subTopics.forEach((subTopic, index) => {
          if (subTopic.id == id) {
            subTopic.type == "video"
              ? (subTopic.status = "Watched")
              : subTopic.type == "exam"
              ? (subTopic.status = "Done")
              : (subTopic.status = "Read");
          }
        });
      });

      if (state.topics) updateLocalStorage(state.topics);
      return { topics: state.topics };
    });
  },
}));

export default useTopicsStore;
