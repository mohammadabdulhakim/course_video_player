// const topics: Topic[] = [
//   {
//     id: 1,
//     weeks: "Week 1-4",
//     title: "Course Introduction",
//     desc: "Advanced story telling techniques for writers: Personas, Characters & Plots.",
//     subTopics: [
//       { id: 101, title: "Introduction", type: "video", src: "https://www.youtube.com/watch?v=54ls40kio2w", status: null },
//       { id: 102, title: "Course Overview", type: "video", src: "https://www.youtube.com/watch?v=onGVDbyojL0", status: null },
//       { id: 103, title: "Course Overview Exam", type: "exam", src: "/exam.png", questions: 0, durationInMin: 10, status: null },
//       { id: 104, title: "Course Exercise / Reference Files", type: "pdf", src: "/azkar.pdf", status: null },
//       { id: 105, title: "Code Editor Installation (Optional)", src: "https://www.youtube.com/watch?v=IUqQJpNUakA", type: "video", status: null },
//       { id: 106, title: "Embedding PHP in HTML", type: "pdf", src: "/azkar.pdf", status: null },
//     ],
//   },
//   {
//     id: 2,
//     weeks: "Week 5-8",
//     title: "JavaScript Language Basics",
//     desc: "Advanced story telling techniques for writers: Personas, Characters & Plots.",
//     subTopics: [
//       { id: 201, title: "Defining Functions", type: "video", src: "https://www.youtube.com/watch?v=Nguc6-TSnZ0", status: null },
//       { id: 202, title: "Function Parameters", type: "video", src: "https://www.youtube.com/watch?v=G0jR9QJDOvM", status: null },
//       { id: 203, title: "Return Values from functions", type: "exam", src: "/exam.png", questions: 2, durationInMin: 15, status: null },
//       { id: 204, title: "Global Variable and Scope", type: "video", src: "https://www.youtube.com/watch?v=G0jR9QJDOvM", status: null },
//       { id: 205, title: "Newer way of writing a constant", type: "video", src: "https://www.youtube.com/watch?v=WXcZiNcW-gc", status: null },
//       { id: 206, title: "Constants", type: "video", src: "https://www.youtube.com/watch?v=3hsSq3nrx80", status: null },
//     ],
//   },
//   {
//     id: 3,
//     weeks: "Week 9-12",
//     title: "Components & Databinding",
//     desc: "Advanced story telling techniques for writers: Personas, Characters & Plots.",
//     subTopics: [
//       { id: 301, title: "Defining Functions", type: "video", src: "https://www.youtube.com/watch?v=78Hb51j-sO4", status: null },
//       { id: 302, title: "Function Parameters", type: "video", src: "https://www.youtube.com/watch?v=M_TD3-GF6AM", status: null },
//       { id: 303, title: "Return Values from functions", type: "exam", src: "/exam.png", questions: 2, durationInMin: 15, status: null },
//       { id: 304, title: "Global Variable and Scope", type: "video", src: "https://www.youtube.com/watch?v=vDsk9s9azFQ", status: null },
//       { id: 305, title: "Newer way of writing a constant", type: "video", src: "https://www.youtube.com/watch?v=SKgv1occ0CE", status: null },
//       { id: 306, title: "Constants", type: "video", src: "https://www.youtube.com/watch?v=bup3QZNx4MQ", status: null },
//     ],
//   },
// ];

const topics: Topic[] = [
  {
    id: 1,
    weeks: "Week 1",
    title: "Introduction to JavaScript",
    desc: "Get started with the basics of JavaScript, including syntax and environment setup.",
    subTopics: [
      { id: 100, title: "أكثر ما يقوي تعلق القلب... (المدرس في الحرمين الشريفين)", type: "video", src: "https://www.youtube.com/watch?v=54ls40kio2w", status: null },
      { id: 101, title: "What is JavaScript?", type: "video", src: "https://www.youtube.com/watch?v=WuzcWpnEZYg", status: null },
      { id: 102, title: "Setting Up Environment", type: "video", src: "https://www.youtube.com/watch?v=mE3iWIFEDMA", status: null },
      { id: 103, title: "Hisn al-Muslim book", type: "pdf", src: "/azkar.pdf", status: null },
      { id: 104, title: "JS Syntax & Variables", type: "video", src: "https://www.youtube.com/watch?v=qjzK4S20I7M", status: null },
      { id: 105, title: "Mini Quiz: Basics", type: "exam", src: "/exam.png", questions: 3, durationInMin: 10, status: null },
    ],
  },
  {
    id: 2,
    weeks: "Week 2",
    title: "Control Structures & Functions",
    desc: "Learn about conditions, loops, and defining reusable functions in JavaScript.",
    subTopics: [
      {
        id: 200,
        title: "لا تكن فارغًا (المدرس في الحرمين الشريفين)",
        type: "video",
        src: "https://www.youtube.com/watch?v=LtvZItwx7cQ",
        status: null,
      },
      { id: 201, title: "If/Else", type: "video", src: "https://www.youtube.com/watch?v=rUa4NQQn7Zc", status: null },
      { id: 202, title: "Switch", type: "video", src: "https://www.youtube.com/watch?v=1-5bIDFybDk", status: null },
      { id: 203, title: "Loops (for, while)", type: "video", src: "https://www.youtube.com/watch?v=NnR4sYnnBoI", status: null },
      { id: 204, title: "Defining Functions", type: "video", src: "https://www.youtube.com/watch?v=wJ7hjluDQHI", status: null },
      { id: 205, title: "Practice Quiz", type: "exam", src: "/exam.png", questions: 4, durationInMin: 15, status: null },
    ],
  },
  {
    id: 3,
    weeks: "Week 3",
    title: "Arrays & Objects",
    desc: "Explore how to store and manipulate data using arrays and objects.",
    subTopics: [
      { id: 300, title: "إياك والتسويف يا طالب العلم (المدرس في الحرمين الشريفين)", type: "video", src: "https://www.youtube.com/watch?v=fw72e85DAZY", status: null },
      { id: 301, title: "Working with Arrays", type: "video", src: "https://www.youtube.com/watch?v=MLVJhya1CV0", status: null },
      { id: 302, title: "Array Methods", type: "video", src: "https://www.youtube.com/watch?v=vPmss_oOhxY", status: null },
      { id: 303, title: "Intro to Objects", type: "video", src: "https://www.youtube.com/watch?v=9dkSSPWu_qY", status: null },
      { id: 304, title: "Object Properties & Methods", type: "video", src: "https://www.youtube.com/watch?v=ZzEg_BSVN0A", status: null },
      { id: 305, title: "Challenge Quiz", type: "exam", src: "/exam.png", questions: 4, durationInMin: 20, status: null },
    ],
  },
  {
    id: 4,
    weeks: "Week 4",
    title: "DOM Manipulation & Events",
    desc: "Use JavaScript to interact with HTML and handle user events.",
    subTopics: [
      { id: 400, title: "خُلق أهل القرآن (المدرس في الحرمين الشريفين)", type: "video", src: "https://www.youtube.com/watch?v=Jlj1S2oaMZ0", status: null },
      { id: 401, title: "The DOM Explained & Selecting Elements", type: "video", src: "https://www.youtube.com/watch?v=AOabnOI4vOQ", status: null },
      { id: 403, title: "Handling Events", type: "video", src: "https://www.youtube.com/watch?v=BFd05UsHP48", status: null },
      { id: 404, title: "Mini Project: Calculator", type: "video", src: "https://www.youtube.com/watch?v=KZZmAi3yOhg", status: null },
      { id: 405, title: "Final Quiz", type: "exam", src: "/exam.png", questions: 5, durationInMin: 25, status: null },
    ],
  },
];


const users = [
  {
    pic: "/images/user1.png",
    fullName: "Mohamed Ahmed",
  },
  {
    pic: "/images/user2.png",
    fullName: "Khaled Ali",
    },
  {
    pic: "/images/user3.png",
    fullName: "Ahmed Omar",
  }
];

const comments: CommentType[] = [
  {
    pic: "/images/user1.png",
    fullName: "Mohamed Ahmed",
    date: "Apr 20, 2025",
    comment:
      "The course is excellent, the explanation is clear and easy! I really appreciated the instructor's way of breaking down complex concepts into simple, digestible pieces. This made it much easier for me to stay focused and retain the information throughout the lessons.",
  },
  {
    pic: "/images/user2.png",
    fullName: "Khaled Ali",
    date: "Apr 19, 2025",
    comment:
      "I learned a lot from the lessons. Thanks for the great effort. I particularly liked how each section builds on the previous one, making the learning process feel very smooth and natural. Would love to see a more advanced version of this course in the future.",
  },
  {
    pic: "/images/user3.png",
    fullName: "Ahmed Omar",
    date: "Apr 18, 2025",
    comment:
      "Some points need a bit more clarification, but overall it's a good explanation. The content is valuable and well-structured, but in a few places, I found myself rewatching parts to fully grasp the ideas. A few real-world examples or visuals might help clarify those sections even more.",
  },
];

const myQuestions = [
  {
    question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
    answer: "`var` is function-scoped and can be re-declared. `let` and `const` are block-scoped. `let` can be reassigned, but `const` cannot be reassigned after declaration."
  },
  {
    question: "Explain how closures work in JavaScript with an example.",
    answer: "A closure is when a function remembers variables from its outer scope even after the outer function has finished executing. Example: `function outer() { let x = 10; return function inner() { console.log(x); } }`"
  },
  {
    question: "What are the main differences between synchronous and asynchronous code?",
    answer: "Synchronous code runs line by line, blocking further execution until the current line finishes. Asynchronous code allows the program to continue running while waiting for operations like network requests or timers."
  },
  {
    question: "How does the JavaScript event loop work?",
    answer: "The event loop handles async operations by placing callback functions in a queue, executing them only when the call stack is empty, enabling non-blocking behavior in JS."
  },
  {
    question: "What is a promise? How do you use `.then()` and `.catch()`?",
    answer: "A Promise represents a value that may be available now, later, or never. Use `.then()` for success handling and `.catch()` for error handling: `fetch(url).then(res => res.json()).catch(err => console.log(err))`."
  },
  {
    question: "Explain the concept of hoisting in JavaScript.",
    answer: "Hoisting is JavaScript’s behavior of moving declarations to the top of their scope. Variables declared with `var` are hoisted with undefined value, while `let` and `const` are hoisted but not initialized."
  },
  {
    question: "What is the difference between shallow copy and deep copy in JavaScript?",
    answer: "A shallow copy copies only the first level, while a deep copy recursively copies all nested objects. `Object.assign()` and spread create shallow copies, while `structuredClone()` or recursion is used for deep copy."
  },
  {
    question: "How does `this` keyword behave in different contexts?",
    answer: "In global scope, `this` refers to the global object. In a method, it refers to the object. In strict mode, `this` can be `undefined`. Arrow functions don’t have their own `this`."
  },
  {
    question: "What are higher-order functions? Give an example.",
    answer: "Higher-order functions are functions that take other functions as arguments or return functions. Example: `arr.map(x => x * 2)`"
  },
  {
    question: "Explain the difference between `==` and `===` in JavaScript.",
    answer: "`==` compares values after type coercion. `===` compares both value and type without coercion. Example: `5 == '5'` is true, but `5 === '5'` is false."
  }
];


export { topics, comments, users, myQuestions };
