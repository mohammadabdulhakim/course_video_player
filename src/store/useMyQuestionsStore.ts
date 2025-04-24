import { myQuestions } from "@/data/dummy";
import { useEffect, useState } from "react";
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


const useMyQuestionsStore = create<Store>()((set) => {
  const [initialQuestions, setInitialQuestions] = useState<Question[]>(myQuestions);

  useEffect(()=>{
    if(typeof window !== undefined){
      const storedQuestions = localStorage.getItem("myQuestions");
      
      if(storedQuestions){
        setInitialQuestions(JSON.parse(storedQuestions));
      }
  }
  },[])
  
  return {
    myQuestions: initialQuestions,
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
}});

export default useMyQuestionsStore;
