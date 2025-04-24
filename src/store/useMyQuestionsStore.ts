import { myQuestions } from "@/data/dummy";
import { toast } from "sonner";
import { create } from "zustand";

type Question = {
  question: string,
  answer: string | null,
}
type Store = {
  myQuestions: Question[];
  addQuestion: (text: string) => void;
};

const updateLocalStorage = (myQuestions: Question[]) => {
  typeof window !== undefined && localStorage.setItem("myQuestions", JSON.stringify(myQuestions));
};

const getInitialQuestions = () =>{
  if(typeof window !== undefined){
      if(localStorage.getItem("myQuestions")){
        return JSON.parse(localStorage.getItem("myQuestions") || "")
      }else{
        return myQuestions
      }
  }
}

const useMyQuestionsStore = create<Store>()((set) => ({
    myQuestions: getInitialQuestions(),
  addQuestion: (text) => {
    return set((state) => {
      state.myQuestions.unshift(
        {
            question: text,
            answer: null,
        }
      )

      updateLocalStorage(state.myQuestions);

      toast("Your question has been added successfully.", {
        description:
          "Thank you for your question.",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      });
      return { myQuestions: state.myQuestions };
    });
  },
}));

export default useMyQuestionsStore;