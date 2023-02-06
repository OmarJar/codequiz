import React, { useEffect, useState } from 'react'
import ParticlesComponent from './ParticlesComponent'
import "./index.scss"

const Result = (props) => {
    const [show, setShow] = useState(false)
    let success, correctAnswers, wrongAnswers = ""
    if (props.score >= 10) {
        success = `Congratulations, you got ${props.score}`
        correctAnswers = `Correct Answers: ${props.score}`
        wrongAnswers = `Wrong Answers: ${20 - props.score} `
    }
    else {
        success = `Unfortunately, you didn't pass the exam`
        correctAnswers = `Correct Answers: ${props.score}`
        wrongAnswers = `Wrong Answers: ${20 - props.score} `
    }
    useEffect(() => {
        (props.score >= 10)?setShow(true):setShow(false) 
    },[props.score])
    
    return (
        <>
            {show && <ParticlesComponent />}
            <h3 className="result">{success}</h3>
            <h3 className="result">{correctAnswers}</h3>
            <h3 className="result">{wrongAnswers}</h3>
        </>

    )
}

export default Result