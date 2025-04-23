import {
  FileQuestion,
  FileText,
  Lock,
  LockKeyhole,
  SquarePlay,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { useRouter, useSearchParams } from "next/navigation";

const TopicCard = ({ topic }: { topic: Topic }) => {
  const searchParams = useSearchParams();
  const currentId = Number(searchParams.get("id"));
  const router = useRouter();

  const handleClick = (subTopic: SubTopic) => {
    if (subTopic.type == "video") {
      router.push(`?id=${subTopic.id}`);
    }
  };
  return (
    <div className="w-full border-1 p-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{topic.title}</h3>
      <p className="font-light text-sm text-secondary-foreground">
        {topic.desc}
      </p>

      <hr className="my-3" />

      {topic.subTopics.map((subTopic) => (
        <div key={crypto.randomUUID()}>
          <div
            onClick={() => handleClick(subTopic)}
            className={`${
              currentId == subTopic.id ? "bg-yellow-100 text-xl" : ""
            } flex gap-2 items-center justify-between py-3 px-2 rounded-md cursor-pointer`}
          >
            <div className="flex gap-2 items-center">
              {subTopic.type == "pdf" ? (
                <FileText className="text-secondary-foreground" size={15} />
              ) : subTopic.type == "video" ? (
                <SquarePlay className="text-secondary-foreground" size={15} />
              ) : (
                <FileQuestion className="text-secondary-foreground" size={15} />
              )}
              <p className="text-sm">{subTopic.title}</p>
            </div>
            <div className="flex gap-1 items-center">
              {Number(subTopic?.questions) >= 0 && (
                <div className="p-1 text-xs font-light bg-green-500/30 text-green-600 uppercase rounded-md">
                  {`${subTopic.questions} Question`}
                  {Number(subTopic?.questions) > 1 && "s"}
                </div>
              )}
              {subTopic?.durationInMin && (
                <div className="p-1 text-xs font-light bg-red-500/30 text-red-600 uppercase rounded-md">{`${subTopic.durationInMin} Minutes`}</div>
              )}
              {subTopic.status ? (
                <Badge className="bg-green-500">{subTopic.status}</Badge>
              ) : (
                <LockKeyhole className="text-secondary-foreground" size={15} />
              )}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TopicCard;
