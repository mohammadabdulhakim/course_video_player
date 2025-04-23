
interface SubTopic {
    id: number,
    title: string,
    questions?: number,
    durationInMin?: number,
    src: string,
    type: "video" | "pdf" | "exam",
    status: "Watched" | "Read" | "Done" | null,
}

interface Topic {
    id: number,
    weeks: string,
    title: string,
    desc: string,
    subTopics: SubTopic[];
}