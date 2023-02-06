const javascriptQuestions = [
    {
        id: "1",
        question: "Javascript could be an _______ language?",
        answers: {
            A: "Object-Oriented",
            B: "Object-Based",
            C: "Procedural",
            D: "None of the above"
        }
    },
    {
        id: "2",
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: {
            A: "var",
            B: "let",
            C: "Both A and B",
            D: "None of the above"
        }
    },
    {
        id: "3",
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: {
            A: "Throws an error",
            B: "Ignores the statements",
            C: "Gives a warning",
            D: "None of the above"
        }
    },
    {
        id: "4",
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: {
            A: "getElementbyId()",
            B: "getElementsByClassName()",
            C: "Both A and B.",
            D: "None of the above"
        }
    },
    
    {
        id: "5",
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: {
            A: "document.write()",
            B: "console.log()",
            C: "window.alert()",
            D: "All of the above"
        }
    },
    {
        id: "6",
        question: "How can a datatype be declared to be a constant type?",
        answers: {
            A: "const",
            B: "var",
            C: "let",
            D: "constant"
        }
    },
    {
        id: "7",
        question: "What will be the output of the following code snippet?",
        extra: `<script type="text/javascript">
        a = 5 + "9";
        document.write(a);
        </script>`,
        answers: {
            A: "Compilation Error",
            B: "14",
            C: "Runtime Error",
            D: "59"
        }
    },
    {
        id: "8",
        question: "What will be the output of the following code snippet?",
        extra: `<script type="text/javascript" language="javascript" >
        var a = "Scaler";
        var result = a.substring(2, 4);
        document.write(result);
        </script>`,
        answers: {
            A: "al",
            B: "ale",
            C: "cal",
            D: "caler"
        }
    },
    {
        id: "9",
        question: "What will be the output of the following code snippet?",
        extra: `<script type="text/javascript" language="javascript">
        var y=8;
        var x=12;
        var res=eval("x+y");
        document.write(res);
        </script>`,
        answers: {
            A: "20",
            B: "x+y",
            C: "128",
            D: "None of the above"
        }
    },
    {
        id: "10",
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers: {
            A: "Both the datatype and the result of the expression are compared.",
            B: "Only the datatype of the expression is compared.",
            C: "Only the value of the expression is compared.",
            D: "None of the above."
        }
    },
    {
        id: "11",
        question: "What keyword is used to check whether a given property is valid or not?",
        answers: {
            A: "in",
            B: "is in",
            C: "exists",
            D: "lies"
        }
    },
    {
        id: "12",
        question: "What is the use of the <noscript> tag in Javascript?",
        answers: {
            A: "The contents are displayed by non-JS-based browsers.",
            B: "Clears all the cookies and cache.",
            C: "Both A and B.",
            D: "None of the above."
        }
    },
    {
        id: "13",
        question: "What will be the output of the following code snippet?",
        extra:`(function(){
            setTimeout(()=> console.log(1),2000);
            console.log(2);
            setTimeout(()=> console.log(3),0);
            console.log(4);
           })();`
        ,
        answers: {
            A: "1 2 3 4",
            B: "2 3 4 1",
            C: "2 4 3 1",
            D: "4 3 2 1"
        }
    },
    {
        id: "14",
        question: "What will be the output of the following code snippet?",
        extra:`(function(a){
            return (function(){
              console.log(a);
              a = 6;
            })()
           })(21);
        `,
        answers: {
            A: "6",
            B: "NaN",
            C: "21",
            D: "None of the above"
        }
    },
    {
        id: "15",
        question: "What will be the output of the following code snippet?",

        extra:`function solve(arr, rotations){
         if(rotations == 0) return arr;
         for(let i = 0; i < rotations; i++){
           let element = arr.pop();
           arr.unshift(element);
         }
         return arr;
        }
        // solve([44, 1, 22, 111], 5);`,
        answers: {
            A: "[111, 44, 1, 22]",
            B: "[44, 1, 22, 111]",
            C: "[111, 44, 1, 22]",
            D: "[1, 22, 111, 44]"
        }
    },
    {
        id: "16",
        question: "What will be the output for the following code snippet?",

        extra:`<p id="example"></p>  
        <script>  
        function Func()  
        {  
        document.getElementById("example").innerHTML=Math.sqrt(81);  
        }  
        </script>`,
        answers: {
            A: "9",
            B: "81",
            C: "Error",
            D: "0"
        }
    },
    {
        id: "17",
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        answers: {
            A: "Boolean",
            B: "Undefined",
            C: "Object",
            D: "Integer"
        }
    },
    {
        id: "18",
        question: "What will be the output of the following code snippet",
        extra:`var a = 1;  
        var b = 0;  
        while (a <= 3)  
        {  
           a++;  
           b += a * 2;  
           print(b);
        }`,
        answers: {
            A: "4 10 18",
            B: "1 2 3",
            C: "1 4 7",
            D: "None of the above"
        }
    },
    {
        id: "19",
        question: "What does the Javascript “debugger” statement do?",
        answers: {
            A: "It will debug all the errors in the program at runtime.",
            B: "It acts as a breakpoint in a program.",
            C: "It will debug error in the current statement if any.",
            D: "All of the above."
        }
    },
    {
        id: "20",
        question: "What will be the output of the following code snippet?",

        extra:`var a = Math.max();
        var b = Math.min();
        print(a);
        print(b);`,
        answers: {
            A: "-Infinity Infinity",
            B: "Infinity -Infinity",
            C: "Infinity Infinity",
            D: "-Infinity -Infinity"
        }
    }
]
const isJavaScript = [
    "Object-Oriented", "Both A and B", "Ignores the statements", "Both A and B.", "All of the above"
    , "const", "59", "al", "20", "Both the datatype and the result of the expression are compared."
    , "in", "The contents are displayed by non-JS-based browsers.", "2 4 3 1", "21", "[111, 44, 1, 22]",
    "9", "Object", "4 10 18", "It acts as a breakpoint in a program.", "-Infinity Infinity"
]
export default javascriptQuestions
export { isJavaScript }