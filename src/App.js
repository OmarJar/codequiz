import "./App.scss"
import React from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "./component/Home"
import HtmlQuiz from "./component/HtmlQuiz"
import Layout from "./component/Layout"
import CssQuiz from "./component/CssQuiz"
import JavaScript from "./component/JavaScript"
import PhpQuiz from "./component/PhpQuiz"
import Python from "./component/Python"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="html" element={<HtmlQuiz />} />
          <Route path="css" element={<CssQuiz />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="php" element={<PhpQuiz />} />
          <Route path="python" element={<Python/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App