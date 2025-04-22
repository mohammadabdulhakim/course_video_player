
interface SubTopic {
    title: String,
    questions?: Number,
    durationInMin?: Number,
    type: "video" | "pdf" | "exam",
    status: "Watched" | "Read" | "Done" | null,
}

interface Topic {
    weeks: String,
    title: String,
    desc: String,
    subTopics: SubTopic[];
}