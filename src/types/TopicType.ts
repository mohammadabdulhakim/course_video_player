
interface SubTopic {
    title: string,
    questions?: number,
    durationInMin?: number,
    type: "video" | "pdf" | "exam",
    status: "Watched" | "Read" | "Done" | null,
}

interface Topic {
    weeks: string,
    title: string,
    desc: string,
    subTopics: SubTopic[];
}