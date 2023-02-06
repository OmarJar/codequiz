const pythonQuestions = [
    {
        id: "1",
        question: "What is the maximum length of a Python identifier?",
        answers: {
            A: "32",
            B: "16",
            C: "128",
            D: "No fixed length is specified."
        }
    },
    {
        id: "2",
        question: "What will be the output of the following code snippet?",
        extra: `print(2**3 + (5 + 6)**(1 + 1))`,
        answers: {
            A: "129",
            B: "8",
            C: "121",
            D: "None of the above"
        }
    },
    {
        id: "3",
        question: "What will be the datatype of the var in the below code snippet?",
        extra: `var = 10
        print(type(var))
        var = "Hello"
        print(type(var))`,
        answers: {
            A: "str and int",
            B: "int and int",
            C: "str and str",
            D: "int and str"
        }
    },
    {
        id: "4",
        question: "How is a code block indicated in Python?",
        answers: {
            A: "Brackets.",
            B: "Indentation.",
            C: "Key.",
            D: "None of the above."
        }
    },
    {
        id: "5",
        question: "What will be the output of the following code snippet?",
        extra: `a = [1, 2, 3]
        a = tuple(a)
        a[0] = 2
        print(a)`,
        answers: {
            A: "[2, 2, 3]",
            B: "(2, 2, 3)",
            C: "(1, 2, 3)",
            D: "Error."
        }
    },
    {
        id: "6",
        question: "What will be the output of the following code snippet?",
        extra: `print(type(5 / 2))
        print(type(5 // 2))`,
        answers: {
            A: "float and int",
            B: "int and float",
            C: "float and float",
            D: "int and int"
        }
    },
    {
        id: "7",
        question: "What will be the output of the following code snippet?",
        extra: `a = [1, 2, 3, 4, 5]
        sum = 0
        for ele in a:
           sum += ele 
        print(sum)`,
        answers: {
            A: "15",
            B: "0",
            C: "20",
            D: "None of the above"
        }
    },
    {
        id: "8",
        question: "What will be the output of the following code snippet?",
        extra: `count = 0
        while(True):
           if count % 3 == 0:
               print(count, end = " ")
           if(count > 15):
               break;
           count += 1`,
        answers: {
            A: "0 1 2 ….. 15",
            B: "Infinite Loop",
            C: "0 3 6 9 12 15",
            D: "0 3 6 9 12"
        }
    },
    {
        id: "9",
        question: "Which of the following concepts is not a part of Python?",
        answers: {
            A: "Pointers.",
            B: "Loops.",
            C: "Dynamic Typing.",
            D: "All of the above."
        }
    },
    {
        id: "10",
        question: "What will be the output of the following code snippet?",
        extra: `def solve(a, b):
           return b if a == 0 else solve(b % a, a)
        print(solve(20, 50))`,
        answers: {
            A: "10",
            B: "20",
            C: "50",
            D: "1"
        }
    },
    {
        id: "11",
        question: "What will be the output of the following code snippet?",
        extra: `def solve(a):
           a = [1, 3, 5]
        a = [2, 4, 6]
        print(a)
        solve(a)
        print(a)`,
        answers: {
            A: "[2, 4, 6]. [2, 4, 6]",
            B: "[2, 4, 6], [1, 3, 5]",
            C: "[1. 3. 5], [1, 3, 5]",
            D: "None of these."
        }
    },
    {
        id: "12",
        question: "What will be the output of the following code snippet?",
        extra: `def func():
           global value
           value = "Local"
        value = "Global"
        func()
        print(value)`,
        answers: {
            A: "Local",
            B: "Global",
            C: "None",
            D: "Cannot be predicted"
        }
    },
    {
        id: "13",
        question: "Which of the following statements are used in Exception Handling in Python?",
        answers: {
            A: "try",
            B: "except",
            C: "finally",
            D: "All of the above"
        }
    },
    {
        id: "14",
        question: "What will be the output of the following code snippet?",
        extra: `a = 3
        b = 1 
        print(a, b)
        a, b = b, a 
        print(a, b)`,
        answers: {
            A: "3 1    1 3",
            B: "3 1    3 1",
            C: "1 3    1 3",
            D: "1 3    3 1"
        }
    },
    {
        id: "15",
        question: "Which of the following types of loops are not supported in Python?",
        answers: {
            A: "for",
            B: "while",
            C: "do-while",
            D: "None of the above"
        }
    },
    {
        id: "16",
        question: "Which of the following is the proper syntax to check if a particular element is present in a list?",
        answers: {
            A: "if ele in list",
            B: "if not ele not in list",
            C: "Both A and B",
            D: "None of the above"
        }
    },
    {
        id: "17",
        question: "What will be the output of the following code snippet?",
        extra: `def thrive(n):
         if n % 15 == 0:
           print("thrive", end = “ ”)
         elif n % 3 != 0 and n % 5 != 0:
           print("neither", end = “ ”)
         elif n % 3 == 0:
           print("three", end = “ ”)
         elif n % 5 == 0:
           print("five", end = “ ”)
        thrive(35)
        thrive(56)
        thrive(15)
        thrive(39)`,
        answers: {
            A: "five neither thrive three",
            B: "five neither three thrive",
            C: "three three three three",
            D: "five neither five neither"
        }
    },
    {
        id: "18",
        question: "What will be the output of the following code snippet?",
        extra: `def check(a):
           print("Even" if a % 2 == 0 else "Odd")
        check(12)`,
        answers: {
            A: "Even",
            B: "Odd",
            C: "Error",
            D: "None"
        }
    },
    {
        id: "19",
        question: "What will be the output of the following code snippet?",
        extra: `example = ["Sunday", "Monday", "Tuesday", "Wednesday"];
        print(example[-3:-1])`,
        answers: {
            A: "['Monday', 'Tuesday']",
            B: "['Sunday', 'Monday']",
            C: "['Tuesday', 'Wednesday']",
            D: "['Wednesday', 'Monday']"
        }
    },
    {
        id: "20",
        question: "What will be the output of the following code snippet?",
        extra: `a = [1, 2]
        print(a * 3)`,
        answers: {
            A: "Error",
            B: "[1, 2]",
            C: "[1, 2, 1, 2]",
            D: "[1, 2, 1, 2, 1, 2]"
        }
    },
]
const isPython = [
    "No fixed length is specified.", "129", "int and str", "Indentation.", "Error.", "float and int"
    , "15", "0 3 6 9 12 15", "Pointers.", "10", "[2, 4, 6]. [2, 4, 6]", "Local", "All of the above"
    , "3 1    1 3", "do-while", "Both A and B", "five neither thrive three", "Even", "['Monday', 'Tuesday']",
    "[1, 2, 1, 2, 1, 2]"
]
export default pythonQuestions
export { isPython }