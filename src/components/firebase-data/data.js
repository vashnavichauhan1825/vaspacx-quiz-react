import { v4 as uuidv4 } from "uuid";

export const dummyQuiz = [
  {
    category: {
      quizId: uuidv4(),
      quizRules: [
        "There are five questions in Quiz",
        "you can choose only one option",
        "10 marks for each Question",
        "There is no negative marking",
        "You can also skip the questions",
      ],
      quizTitle: "Quiz on Space Agencies and Centers in India",
      quizDetail:
        "This quiz level is hard . so are you ready ? You have 10 seconds to answer each question. The faster you answer, the higher your score. When you are done, try again to beat your best score!",
      quiz: [
        {
          id: uuidv4(),
          question:
            "The day on which the Sun ’ s direct rays cross the celestial equator is called:",
          options: [
            "The Aphelion",
            "The Solstice",
            "The Equinox",
            "The Ecliptic",
          ],
          answer: "The Equinox",
        },
        {
          id: uuidv4(),
          question: "Which of these objects is the farthest from the Sun ?",
          options: ["Saturn", "Neptune", "90377 Sedna", "Kuiper belt"],
          answer: "Neptune",
        },
        {
          id: uuidv4(),
          question:
            "What term describes the alignment of three celestial bodies?",
          options: ["syzygy", "sizzle", "symbology", "suzerainty"],
          answer: "syzygy",
        },
        {
          id: uuidv4(),
          question: "Who invented the telescope ?",
          options: ["Johannes Kepler", "Galileo", "Hypatia", "Hans Lippershey"],
          answer: "Galileo",
        },
        {
          id: uuidv4(),
          question:
            "What term describes the alignment of three celestial bodies?",
          options: ["syzygy", "sizzle", "symbology", "suzerainty"],
          answer: "syzygy",
        },
      ],
    },
  },
  {
    category: {
      quizId: uuidv4(),
      quizRules: [
        "There are five questions in Quiz",
        "you can choose only one option",
        "10 marks for each Question",
        "There is no negative marking",
        "You can also skip the questions",
      ],
      quizTitle: "This Quiz based on Universe and solar system",
      quizDetail:
        "Welcome to interesting Easy General Knowledge Questions and Answers Quiz. It has Multiple Choice Questions with a single correct answer.",
      quiz: [
        {
          id: uuidv4(),
          question:
            "There have been more missions to this planet versus any other planet:",
          options: ["Saturn", "Mars", "Neptune", "Uranus"],
          answer: "Mars",
        },
        {
          id: uuidv4(),
          question: "Which is the smallest planet within our solar system?",
          options: ["Saturn", "Mercury", "90377 Sedna", "Kuiper belt"],
          answer: "Mercury",
        },
        {
          id: uuidv4(),
          question: "The moon called Titan orbits which planet?",
          options: ["Saturn", "Mercury", "Neptune", "Uranus"],
          answer: "Saturn",
        },
        {
          id: uuidv4(),
          question:
            "What protects Earth from meteoroids and radiation from the sun ?",
          options: [
            "The Aphelion",
            "It’s atmosphere",
            "The Equinox",
            "The Ecliptic",
          ],
          answer: "It’s atmosphere",
        },
        {
          id: uuidv4(),
          question: "Which of these objects is the farthest from the Sun ?",
          options: ["Saturn", "Neptune", "90377 Sedna", "Kuiper belt"],
          answer: "Neptune",
        },
      ],
    },
  },
  {
    category: {
      quizId: uuidv4(),
      quizRules: [
        "There are five questions in Quiz",
        "you can choose only one option",
        "10 marks for each Question",
        "There is no negative marking",
        "You can also skip the questions",
      ],

      quizTitle: "This Quiz based on Astronomy and Facts about space !",
      quizDetail:
        "Welcome to another interesting Hard General Knowledge Questions and Answers Quiz. It has Multiple Choice Questions with a single correct answer.",
      quiz: [
        {
          id: uuidv4(),
          question:
            "Which astronaut is famous for having written his daughter’s initials on the moon?",
          options: ["Gene Cernan", "Neil Armstrong", "Pete Conrad", "Edwin"],
          answer: "Gene Cernan",
        },
        {
          id: uuidv4(),
          question: "How long does it take the moon to orbit the Earth?",
          options: ["60 days", "1 year", "28 days", "31 days"],
          answer: "28 days",
        },
        {
          id: uuidv4(),
          question: "What are the storms produced by the sun called ?",
          options: [
            "Solar storms",
            "Atomic storms",
            "90377 Sedna",
            "Kuiper belt",
          ],
          answer: "Solar storms",
        },
        {
          id: uuidv4(),
          question:
            "What term describes the alignment of three celestial bodies?",
          options: ["syzygy", "sizzle", "symbology", "suzerainty"],
          answer: "syzygy",
        },
        {
          id: uuidv4(),
          question: "Which is the densest planet in our solar system?",
          options: ["Earth", "Mercury", "Mars", "Jupiter"],
          answer: "Earth",
        },
      ],
    },
  },
  {
    category: {
      quizId: uuidv4(),
      quizRules: [
        "There are five questions in Quiz",
        "you can choose only one option",
        "10 marks for each Question",
        "There is no negative marking",
        "You can also skip the questions",
      ],
      quizTitle: "Quiz for children's under age 10 to 15 yrs old",
      quizDetail:
        "Perfect for kids, this quiz will get you thinking about the fascinating topics of space and astronomy. Quizzes have become a more popular tool !",
      quiz: [
        {
          id: uuidv4(),
          question: "Which planet is known as the Evening Star?",
          options: ["Mercury", "Mars", "Venus", "Earth"],
          answer: "Venus",
        },
        {
          id: uuidv4(),
          question: "How long is one year on Jupiter?",
          options: [
            "12 Earth years",
            "10 Earth years",
            "9 Earth years",
            "15 Earth years",
          ],
          answer: "12 Earth years",
        },
        {
          id: uuidv4(),
          question: "Which of these objects is the farthest from the Sun ?",
          options: ["Saturn", "Neptune", "90377 Sedna", "Kuiper belt"],
          answer: "Neptune",
        },
        {
          id: uuidv4(),
          question:
            "What term describes the alignment of three celestial bodies?",
          options: ["syzygy", "sizzle", "symbology", "suzerainty"],
          answer: "syzygy",
        },
        {
          id: uuidv4(),
          question: "What is the smallest planet in the solar system by mass?",
          options: ["Earth", "Mercury", "Mars", "Jupiter"],
          answer: "Mercury",
        },
      ],
    },
  },
];

export const categoryLength = dummyQuiz.length;

const reducer = (accumulator, curr) => accumulator + curr;

export const questionsLength = dummyQuiz
  .map((item) => item.category.quiz.length)
  .reduce(reducer);
