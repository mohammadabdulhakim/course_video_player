import { comments } from "@/data/dummy";
import { toast } from "sonner";
import { create } from "zustand";
import moment from 'moment';
import { CommentType } from "@/types/CommentType";

type Store = {
  comments: CommentType[];
  addComment: (text: string) => void;
};

const updateLocalStorage = (comments: CommentType[]) => {
  typeof window != "undefined" && localStorage.setItem("comments", JSON.stringify(comments));
};

const getInitialComments = () =>{
  if(typeof window != "undefined"){
      if(localStorage.getItem("comments")){
        return JSON.parse(localStorage.getItem("comments") || "")
      }else{
        return comments
      }
  }
}

const useCommentStore = create<Store>()((set) => ({
    comments: getInitialComments(),
  addComment: (text) => {
    return set((state) => {
      state.comments.unshift(
        {
            date: moment().format('ll'),
            comment: text,
            fullName: "You",
            pic: "/images/user3.png",
        }
      )

      updateLocalStorage(state.comments);

      toast("Your comment has been added successfully.", {
        description:
          "Thank you for your comment.",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      });
      return { comments: state.comments };
    });
  },
}));

export default useCommentStore;