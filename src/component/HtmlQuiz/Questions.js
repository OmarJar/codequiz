const htmlQuestions = [
    {
        id: "1",
        question: "HTML tags are surrounded by ___ brackets.",
        answers: {
            A: "Angle",
            B: "Curly",
            C: "Round",
            D: "Square"
        }
    }
    ,
    {
        id: "2",
        question: "HTML document can contain ___.",
        answers: {
            A: "Tags",
            B: "Plain Text",
            C: "Attributes",
            D: "All the above"
        }
    },
    {
        id: "3",
        question: "Page designed in HTML is called as ___.",
        answers: {
            A: "Server Page",
            B: "Web page",
            C: "Media Page",
            D: "none of the above"
        }
    },
    {
        id: "4",
        question: "Which HTML tag is used to link the URL ?",
        answers: {
            A: "<style>",
            B: "<link>",
            C: "<a>",
            D: "<hyperlink>"
        }
    },
    {
        id: "5",
        question: "Link URL in HTML is specified using ___ attribute.",
        answers: {
            A: "src",
            B: "link",
            C: "rel",
            D: "href"
        }
    },
    {
        id: "6",
        question: "Link in HTML can be of ___ type(s).",
        answers: {
            A: "Active",
            B: "Visited",
            C: "Unvisited",
            D: "All the above"
        }
    }
    ,
    {
        id: "7",
        question: "How many heading tags are supported by HTML?",
        answers: {
            A: "3",
            B: "2",
            C: "4",
            D: "6"
        }
    }
    ,
    {
        id: "8",
        question: "___ is used to upload a HTML file to a web server.",
        answers: {
            A: "HTTP",
            B: "SMTP",
            C: "SIP",
            D: "FTP"
        }
    }
    ,
    {
        id: "9",
        question: "The recommended basic size for a favicon is ___ pixels.",
        answers: {
            A: "16x16",
            B: "48x48",
            C: "Both the above",
            D: "None of the above"
        }
    }
    ,
    {
        id: "10",
        question: `Choose the correct HTML tag to make a text italic.`,
        extra: "1.<i> 2.<italic> 3.<it> 4.<il>",
        answers: {
            A: "1",
            B: "1 or 2",
            C: "1 or 3",
            D: "1, 2, or 3"
        }
    },

    {
        id: "11",
        question: "Which tag tells the browser where the page starts and stops?",
        extra:`1.<html> 2.<body> 
        3.<head> 4.<title>`,
        answers: {
            A: "1",
            B: "2",
            C: "3",
            D: "4"
        }
    }
    ,
    {
        id: "12",
        question: "Which of the following tags is used to add a row to a table in HTML?",
        answers: {
            A: "<tr>",
            B: "<td>",
            C: "<th>",
            D: "None of the above"
        }
    },
    {
        id: "13",
        question: "Which property allows an image link to show a text label?",
        answers: {
            A: "alt",
            B: "str",
            C: "alternative",
            D: "None of the above"
        }
    },
    {
        id: "14",
        question: "If the background image is smaller than the screen, what will happen ?",
        answers: {
            A: "It will be streteched",
            B: "It will be repeated",
            C: "It will leave a blank space at the bottom of your page",
            D: "None of the above"
        }
    },
    {
        id: "15",
        question: "The HTML tags are all",
        answers: {
            A: "In lower case",
            B: "In upper case",
            C: "Case sensitive",
            D: "Not case sensitive"
        }
    },
    {
        id: "16",
        question: "What are the properties of block-level elements?",
        answers: {
            A: "It has a top and bottom margin.",
            B: "It always takes the full width available.",
            C: "It always starts on a new line.",
            D: "All of the above."
        }
    },
    {
        id: "17",
        question: "Which one of the following is the correct e-mail link ?",
        answers: {
            A: `<a href="mailto:codescracker@gmail.com">`,
            B: "<mail>codescracker@gmail.com</mail>",
            C: `<a src="mailto:codescracker@gmail.com">`,
            D: `<a href="codescracker@gmail.com">`
        }
    },
    {
        id: "18",
        question: "What are the types of unordered lists in HTML?",
        answers: {
            A: "Triangle, Circle, Disc.",
            B: "Triangle, Square, disc.",
            C: "Circle, square, disc.",
            D: "All of the above"
        }
    }
    ,
    {
        id: "19",
        question: "Marquee is a tag in HTML to",
        answers: {
            A: "Display text with scrolling effect",
            B: "Mark the list of items to maintain inqueue",
            C: "Mark the text so that it is hidden in browser",
            D: "Display text with strikeout effect"
        }
    },
    {
        id: "20",
        question: "What is the use of iframe in HTML?",
        answers: {
            A: "To display a web page within a web page",
            B: "To display a web page with animation effect",
            C: "To display a web page without browser",
            D: "All the above"
        }
    }
]
const isHtml = [
    "Angle", "All the above", "Web page", "<a>", "src", "All the above", "6", "FTP"
    , "16x16", "1", "1", "<tr>", "alt", "It will be repeated", "In lower case", "All of the above."
    , `<a href="mailto:codescracker@gmail.com">`, "Circle, square, disc.", "Display text with scrolling effect"
    , "To display a web page within a web page"
]
export default htmlQuestions
export { isHtml }