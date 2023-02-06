import React from 'react'
import "./index.scss"
import { name } from '../../Navbar'
import htmlQuestions from '../../HtmlQuiz/Questions'
import CssQuestions from '../../CssQuiz/CssQuestions'
import phpQuestions from '../../PhpQuiz/phpQuestions'
import javascriptQuestions from '../../JavaScript/JavascriptQuestions'
import pythonQuestions from '../../Python/pythonQuestions'

let result = ""
let selectedTopic = ""
const Choices = () => {

    switch (name) {
        case "Html":
            selectedTopic = htmlQuestions
            break;
        case "CSS":
            selectedTopic = CssQuestions
            break;
        case "JavaScript":
            selectedTopic = javascriptQuestions
            break;
        case "Php":
            selectedTopic = phpQuestions
            break;
        case "Python":
            selectedTopic = pythonQuestions
            break;
        default:
            break;
    }
    result = selectedTopic.map((question) => (
        <div className="question" key={question.id}>
            <h3 className="title">
                <span>{question.question}</span>
                {question.extra && <span id="extra"><code>{question.extra}</code></span>}
            </h3>
            {
                Object.keys(question.answers).map((answer) => (
                    <div className='choice' key={answer}>
                        <label className="form-control">
                            <input type="radio" name="radio"
                                value={question.answers[answer]}
                            />
                            <p>{question.answers[answer]}</p>
                        </label>
                    </div>
                ))}
        </div>
    ))
    return (
        <>
            {result}
        </>
    )
}

export default Choices
export { result }