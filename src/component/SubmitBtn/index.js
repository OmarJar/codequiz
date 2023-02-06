import React, { useState } from 'react'
import "./index.scss"
import { name } from '../Navbar'
import { isHtml } from '../HtmlQuiz/Questions'
import { isCss } from '../CssQuiz/CssQuestions'
import { isJavaScript } from '../JavaScript/JavascriptQuestions'
import { isPhp } from '../PhpQuiz/phpQuestions'
import { isPython } from '../Python/pythonQuestions'
import Result from '../Result'
import LinearDeterminate from '../LinearProgress'
let starter = 0
let count = 0
const arr = []
let selectedQuestion = ""
const SubmitBtn = () => {

    let [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [visible, setVisible] = useState(false)
    const [start, setStart] = useState(true)
    const [value, setValue] = useState(0)

    switch (name) {
        case "Html":
            selectedQuestion = isHtml
            break;
        case "CSS":
            selectedQuestion = isCss
            break;
        case "JavaScript":
            selectedQuestion = isJavaScript
            break;
        case "Php":
            selectedQuestion = isPhp
            break;
        case "Python":
            selectedQuestion = isPython
            break;
        default:
            break;
    }

    const handleProgress = () => {
        setValue(prevValue => prevValue + 5)
    }
    const handleQuestion = () => {
        if (starter === 0) {
            setStart(!start)
            setVisible(!visible)
            starter++
        }
        if (starter === selectedQuestion.length - 1) {
            setVisible(!visible)
            starter = 0
            count = 0
        }

        const currentDiv = document.querySelectorAll(".question")
        for (let index = 0; index < currentDiv.length; index++) {
            currentDiv[count].classList.add("visible")
            if (count > 0) {
                currentDiv[count - 1].classList.remove("visible")
            }
            break
        }
        if (count >= selectedQuestion.length - 1) {
            count = 0
            starter = 0
            document.getElementById("btn").style.display = "none"
            document.getElementById("submit").style.display = "block"
        }
        else {
            count++
        }
    }
    const handleStart = () => {
        count = 0
        starter = 0
        handleQuestion()
        handleProgress()
    }
    const selectedValues = [];
    const handleClick = () => {
        handleQuestion()
        handleProgress()
        const radioButtons = document.querySelectorAll('input[type="radio"]')
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                selectedValues.push(radioButtons[i].value)
            }
        }
        arr.push(selectedValues)
    }

    const handleResult = () => {
        const radioButtons = document.querySelectorAll('input[type="radio"]')
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                selectedValues.push(radioButtons[i].value)
            }
        }
        arr.push(selectedValues)
        document.getElementById("choices-div").style.display = "none"
        document.getElementById("submit").style.display = "none"
        setVisible(!visible)
        let flatArr = arr.flat()
        for (let i = 0; i < flatArr.length; i++) {
            if (flatArr[i] === selectedQuestion[i]) {
                setScore(score => score + 1)
            }
        }
        document.getElementById("final").classList.add("final-div")
        setShowResult(true)
        console.log(score)
        starter = 0
        count = 0
        arr.length = 0
        score = 0
    }
    return (
        <>
            <div className="submit-btn">
                {visible && <>
                    <LinearDeterminate variant="determinate" value={value} />
                    <h5 className="no-of-questions">Question {value / 5} / 20</h5>
                </>}
                {start && <button className='btn' id='start-btn' onClick={handleStart} >
                    Start
                </button>}
                {visible && <button className='btn' id='btn' onClick={handleClick}>
                    Next
                </button>}
                {showResult && <Result
                    score={score}
                />}
                <button id="submit" className="btn" onClick={handleResult} style={{ display: "none" }}>
                    Submit
                </button>
            </div>
        </>
    )
}
export default SubmitBtn
export { count }