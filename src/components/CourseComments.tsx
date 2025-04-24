import Image from "next/image";
import React from "react";
import AddComment from "@/components/AddComment";
import useCommentStore from "@/store/useCommentStore";
import {useRouter} from "next/navigation";

const CourseComments = () => {
  const {addComment, comments} = useCommentStore();
  const router = useRouter();

  const handleSubmitComment = (comment: string) =>{
    addComment(comment);
    router.push("#comments")
  }
  
  return (
    <div id="comments" className="course-comments flex flex-col gap-4 items-start mb-30">
      <h2 className="text-2xl font-semibold mb-3">Comments</h2>
      {
        comments.map((comment,index)=>(
          <div key={crypto.randomUUID()}>
            <div className="flex items-start gap-5">
              <Image width={70} height={70} alt={comment.fullName} src={comment.pic} className="rounded-full" />
              <div className="flex gap-1 flex-col">
                <p className=" text-md ">{comment.fullName}</p>
                <p className="text-gray-500 text-sm">{comment.date}</p>
                <p className="text-gray-500 text-sm mt-1">{comment.comment}</p>
              </div>
            </div>
            {comments.length-1 > index && <hr className="my-3 mx-4"/>}
          </div>
        ))
      }

      <AddComment placeholder="Write a Comment..." action={handleSubmitComment} />
    </div>
  );
};

export default CourseComments;
