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
  localStorage.setItem("comments", JSON.stringify(comments));
};

const useCommentStore = create<Store>()((set) => ({
    comments:
    (localStorage.getItem("comments") &&
      JSON.parse(localStorage.getItem("comments") || "")) ||
      comments,
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
