const CssQuestions = [
    {
        id: "1",
        question: "What is the correct syntax for setting the background color of an element to red?",
        answers: {
            A: "background-color: red;",
            B: "color: background-red;",
            C: "bg-color: red;",
            D: "background: color-red;"
        }
    },
    {
        id: "2",
        question: `How do you select an element with the class "example"?`,
        answers: {
            A: "#example",
            B: ".example",
            C: "example",
            D: "*example"
        }
    },
    {
        id: "3",
        question: "Which property is used to control the font size of text?",
        answers: {
            A: "font-color",
            B: "font-type",
            C: "font-size",
            D: "text-size"
        }
    },
    {
        id: "4",
        question: "How do you center an element horizontally within its parent container?",
        answers: {
            A: "margin: 0 auto;",
            B: "align: center;",
            C: "text-align: center;",
            D: "display: center;"
        }
    },
    {
        id: "5",
        question: "Which property is used to control the amount of space between lines of text?",
        answers: {
            A: "line-height",
            B: "letter-spacing",
            C: "word-spacing",
            D: "text-spacing"
        }
    },
    {
        id: "6",
        question: "How do you apply a hover effect to all links on a page?",
        answers: {
            A: "a:hover {...}",
            B: "links:hover {...}",
            C: ":hover {...}",
            D: "*:hover {...}"
        }
    },
    {
        id: "7",
        question: "What is the correct syntax for setting the width of an element to 100 pixels?",
        answers: {
            A: "size: 100px;",
            B: "width: 100;",
            C: "width: 100px;",
            D: "size: 100;"
        }
    },
    {
        id: "8",
        question: "Which property is used to control the amount of space between words?",
        answers: {
            A: "word-spacing",
            B: "letter-spacing",
            C: "line-height",
            D: "text-spacing"
        }
    },
    {
        id: "9",
        question: "What type of CSS is generally recommended for designing large web pages?",
        answers: {
            A: "Inline",
            B: "Internal",
            C: "External",
            D: "None of the above"
        }
    },
    {
        id: "10",
        question: "How do you specify multiple CSS styles for a single element?",
        answers: {
            A: "Separate the styles with a comma",
            B: "use multiple CSS class",
            C: "use multiple CSS id",
            D: "use & operator"
        }
    },
    {
        id: "11",
        question: "What is the correct syntax for setting the padding of an element to 10 pixels on all sides?",
        answers: {
            A: "padding: 10px;",
            B: "padding-size: 10px;",
            C: "padding-all: 10px;",
            D: "padding: 10px 10px 10px 10px;"
        }
    },
    {
        id: "12",
        question: "How do you select the first child element within a parent element?",
        answers: {
            A: ":first-child",
            B: ":first",
            C: ":child(1)",
            D: ":first()"
        }
    },
    {
        id: "13",
        question: "Which property is used to control the text decoration of an element?",
        answers: {
            A: "text-decor",
            B: "text-style",
            C: "font-decoration",
            D: "text-decoration"
        }
    },
    {
        id: "14",
        question: "How do you display an element as a block-level element?",
        answers: {
            A: "display: block;",
            B: "block: display;",
            C: "layout: block;",
            D: "type: block;"
        }
    },
    {
        id: "15",
        question: "Which property is used to control the font weight of an element?",
        answers: {
            A: "font-weight",
            B: "text-weight",
            C: "weight-font",
            D: "font: weight;"
        }
    },
    {
        id: "16",
        question: "How do you specify that an element should take up the full width of its parent container?",
        answers: {
            A: "width: 100%;",
            B: "size: 100%;",
            C: "scale: 100%;",
            D: "full-width: true;"
        }
    },
    {
        id: "17",
        question: "Which of the following are parts of the CSS box model?",
        answers: {
            A: "Margins",
            B: "Borders",
            C: "Padding",
            D: "All of the above"
        }
    },
    {
        id: "18",
        question: "Which property is used to control the visibility of an element?",
        answers: {
            A: "visibility",
            B: "display",
            C: "show",
            D: "hidden"
        }
    },
    {
        id: "19",
        question: "How do you apply a style to all elements of a specific type (e.g. all <p> elements)?",
        answers: {
            A: "type: p {...}",
            B: ".p {...}",
            C: "p {...}",
            D: "*p {...}"
        }
    },
    {
        id: "20",
        question: "What is the correct syntax for referring an external CSS?",
        answers: {
            A: `<link rel="stylesheet" type="text/css" href="style.css">`,
            B: `<style rel="stylesheet" type="text/css" href="style.css">`,
            C: "Both A and B",
            D: "None of the above"
        }
    }
]
const isCss = [
    "background-color: red;", ".example", "font-size", "margin: 0 auto;", "line-height", "a:hover {...}"
    , "width: 100px;", "letter-spacing", "External", "use multiple CSS class", "padding: 10px;", ":first-child"
    , "text-decoration", "display: block;", "font-weight", "width: 100%;", "All of the above", "visibility", "p {...}"
    , `<link rel="stylesheet" type="text/css" href="style.css">`
]
export default CssQuestions
export { isCss }