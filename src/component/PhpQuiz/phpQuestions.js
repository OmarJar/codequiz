const phpQuestions =[
    {
        id: "1",
        question: "Full form of PHP is?",
        answers: {
            A: "Pretext Hypertext Processor",
            B: "Hypertext preprocessor",
            C: "Preprocessor Home page",
            D: "None"
        }
    },
    {
        id: "2",
        question: "Choose the default file extension of PHP among the following.",
        answers: {
            A: ".xml",
            B: ".html",
            C: ".php",
            D: ".ph"
        }
    },
    {
        id: "3",
        question: "What type of language is PHP?",
        answers: {
            A: "Server-side scripting",
            B: "Client-side scripting",
            C: "User-side scripting",
            D: "None"
        }
    },
    {
        id: "4",
        question: "Choose the correct syntax of PHP.",
        answers: {
            A: "<php>",
            B: "<?php>",
            C: "?php?",
            D: "<?php?>"
        }
    },
    {
        id: "5",
        question: "Choose the equivalent of the statement : $sub -= $sub.",
        answers: {
            A: "$sub = $sub - 1",
            B: "$sub = $sub - $sub",
            C: "$sub = $sub - $sub - 1",
            D: "$sub = $sub"
        }
    },
    {
        id: "6",
        question: "Total ways in which user print output in PHP is -",
        answers: {
            A: "2",
            B: "3",
            C: "4",
            D: "5"
        }
    },
    {
        id: "7",
        question: "Among echo and print, which is faster?",
        answers: {
            A: "print",
            B: "echo",
            C: "Both have the same speed",
            D: "None"
        }
    },
    {
        id: "8",
        question: "In PHP, variable names must start with which of the following.",
        answers: {
            A: "No numbers",
            B: "Letters",
            C: "Underscore",
            D: "All of the above"
        }
    },
    {
        id: "9",
        question: "Is PHP variable case sensitive?",
        answers: {
            A: "True",
            B: "False",
            C: "Depends on variable",
            D: "None"
        }
    },
    {
        id: "10",
        question: "Choose the incorrect data type among the following.",
        answers: {
            A: "Objects",
            B: "void",
            C: "Null",
            D: "Resources"
        }
    },
    {
        id: "11",
        question: "Total looping techniques supported by PHP are?",
        answers: {
            A: "1",
            B: "22",
            C: "3",
            D: "4"
        }
    },
    {
        id: "12",
        question: "The do-while loop is an exit control loop.",
        answers: {
            A: "False",
            B: "True",
            C: "Depends on the condition",
            D: "None"
        }
    },
    {
        id: "13",
        question: "While loop is an exit control loop.",
        answers: {
            A: "False",
            B: "True",
            C: "Depends on the condition",
            D: "None"
        }
    },
    {
        id: "14",
        question: "Identify the function among the following, which is not built-in.",
        answers: {
            A: "fopen()",
            B: "fclosed()",
            C: "gettype()",
            D: "print_r()"
        }
    },
    {
        id: "15",
        question: "Functions in PHP should start with which of the following keyword?",
        answers: {
            A: "def",
            B: "fun",
            C: "function",
            D: "None"
        }
    },
    {
        id: "16",
        question: "Total types of the array in PHP is?",
        answers: {
            A: "2",
            B: "3",
            C: "4",
            D: "5"
        }
    },
    {
        id: "17",
        question: "Index of an array by default starts with which of the following in PHP?",
        answers: {
            A: "0",
            B: "-1",
            C: "1",
            D: "2"
        }
    },
    {
        id: "18",
        question: "trim() in PHP is used for?",
        answers: {
            A: "Removes uppercase alphabet",
            B: "Removes whitespaces",
            C: "Removes lowercase alphabet",
            D: "Removes underscore"
        }
    },
    {
        id: "19",
        question: "Another term used for Objects is?",
        answers: {
            A: "template",
            B: "reference",
            C: "instances",
            D: "class"
        }
    },
    {
        id: "20",
        question: "Using which keyword is the object created?",
        answers: {
            A: "object",
            B: "new",
            C: "create",
            D: "None"
        }
    }
]
const isPhp = [
    "Hypertext preprocessor", ".php", "Server-side scripting","<?php?>", "$sub = $sub - $sub",
    "2", "echo", "All of the above", "True", "void", "4", "True", "False", "fclosed()", "function"
    ,"3", "0", "Removes whitespaces", "instances", "new"
]
export default phpQuestions
export {isPhp}