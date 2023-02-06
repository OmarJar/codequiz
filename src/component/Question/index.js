import React from 'react'
import Choices from './Choices'
import "./index.scss"
import SubmitBtn from '../SubmitBtn'

const Question = () => {

  return (
    <>
      <div className="question-div" id="final">

        <div className="choices" id="choices-div">
          <Choices
          />
        </div>
        <SubmitBtn />
      </div>
      
    </>
  )
}

export default Question