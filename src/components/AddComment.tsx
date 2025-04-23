import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"

const AddComment = () => {
  return (
    <div className="w-full my-5 flex flex-col items-start gap-4">
        <Textarea placeholder="Write a Comment..." className="w-full min-h-36 drop-shadow-2xl hover:drop-shadow-md" />
        <Button className="bg-teal-500 hover:bg-teal-600 cursor-pointer" size={'lg'}>
            Submit Review
        </Button>
    </div>
  )
}

export default AddComment