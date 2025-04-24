import React from "react";
import Popup from "./Popup";
import AddComment from "../AddComment";
import useMyQuestionsStore from "@/store/useMyQuestionsStore";

const PopupAskQuestion = () => {
  const {addQuestion, myQuestions} = useMyQuestionsStore();

  const handleSubmitQuestion = (question: string) => {
    addQuestion(question);
  }

  return (
      <Popup title="Ask Question">
        <div className="py-10 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center gap-8">
          <h2 className="text-2xl font-semibold">
            Write your Question Below...
          </h2>
          <AddComment placeholder="My question is..." action={handleSubmitQuestion} />

          <div className="w-full bg-[#F5F9FA] drop-shadow-md rounded-4xl p-6 gap-4 flex flex-col">
          <h2 className="text-2xl font-semibold">
            My Questions
          </h2>
          {myQuestions.map((q)=>(
              <div className="border-1 bg-white p-3">
                <p className=" text-lg mb-2 font-semibold">{q.question}</p>
                <p className="mx-2 text-gray-700">{q.answer || "Waiting for answer..."}</p>
              </div>
                
          ))}
          </div>
        </div>
      </Popup>
  );
};

export default PopupAskQuestion;
