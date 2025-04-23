const topics: Topic[] = [
    {
        weeks: "Week 1-4",
        title: "Course Introduction",
        desc: "Advanced story telling techniques for writers: Personas, Characters & Plots.",
        subTopics: [
            {
                title: "Introduction",
                type: "video",
                status: "Watched",
            },
            {
                title: "Course Overview",
                type: "video",
                status: null,
            },
            {
                title: "Course Overview Exam",
                type: "exam",
                questions: 0,
                durationInMin: 10,
                status: null,
            },
            {
                title: "Course Exercise / Reference Files",
                type: "pdf",
                status: null,
            },
            {
                title: "Code Editor Installation (Optional)",
                type: "video",
                status: null,
            },
            {
                title: "Embedding PHP in HTML",
                type: "pdf",
                status: null,
            }
        ]
    },
    {
        weeks: "Week 5-8",
        title: "JavaScript Language Basics",
        desc: "Advanced story telling techniques for writers: Personas, Characters & Plots.",
        subTopics: [
            {
                title: "Defining Functions",
                type: "video",
                status: null,
            },
            {
                title: "Function Parameters",
                type: "video",
                status: null,
            },
            {
                title: "Return Values from functions",
                type: "exam",
                questions: 2,
                durationInMin: 15,
                status: null,
            },
            {
                title: "Global Variable and Scope",
                type: "video",
                status: null,
            },
            {
                title: "Newer way of writing a constant",
                type: "video",
                status: null,
            },
            {
                title: "Constants",
                type: "video",
                status: null,
            }
        ]
    },
    {
        weeks: "Week 5-8",
        title: "Components & Databinding",
        desc: "Advanced story telling techniques for writers: Personas, Characters & Plots.",
        subTopics: [
            {
                title: "Defining Functions",
                type: "video",
                status: null,
            },
            {
                title: "Function Parameters",
                type: "video",
                status: null,
            },
            {
                title: "Return Values from functions",
                type: "exam",
                questions: 2,
                durationInMin: 15,
                status: null,
            },
            {
                title: "Global Variable and Scope",
                type: "video",
                status: null,
            },
            {
                title: "Newer way of writing a constant",
                type: "video",
                status: null,
            },
            {
                title: "Constants",
                type: "video",
                status: null,
            }
        ]
    },
]
const comments: CommentType[] = [
    {
      pic: "/images/user1.png",
      fullName: "Mohamed Ahmed",
      date: "Apr 20, 2025",
      comment: "The course is excellent, the explanation is clear and easy! I really appreciated the instructor's way of breaking down complex concepts into simple, digestible pieces. This made it much easier for me to stay focused and retain the information throughout the lessons."
    },
    {
      pic: "/images/user2.png",
      fullName: "Khaled Ali",
      date: "Apr 19, 2025",
      comment: "I learned a lot from the lessons. Thanks for the great effort. I particularly liked how each section builds on the previous one, making the learning process feel very smooth and natural. Would love to see a more advanced version of this course in the future."
    },
    {
      pic: "/images/user3.png",
      fullName: "Ahmed Omar",
      date: "Apr 18, 2025",
      comment: "Some points need a bit more clarification, but overall it's a good explanation. The content is valuable and well-structured, but in a few places, I found myself rewatching parts to fully grasp the ideas. A few real-world examples or visuals might help clarify those sections even more."
    }
  ];
  
export {topics, comments};