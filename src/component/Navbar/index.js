import React from 'react'
import "./index.scss"
import { Link, NavLink } from 'react-router-dom'
import quizLogo from "../../assets/images/codequiz.png"
let name=""
const Navbar = () => {

    return (
        <div className="navbar">

            <div className="container">
                <div className="logo-div">
                    <Link to="/">
                        <img className="img" src={quizLogo} alt="logo" />
                    </Link>
                </div>
                <div id="menu">
                    <NavLink
                        exact="true"
                        to="/html"
                        activeclassname="active"
                        id="html-nav"
                        onClick={()=>{
                        name=document.getElementById("html-nav").innerText}}
                    >
                        Html
                    </NavLink>

                    <NavLink
                        exact="true"
                        to="/css"
                        activeclassname="active"
                        id="css-nav"
                        onClick={()=>{
                        name=document.getElementById("css-nav").innerText}}
                    >
                        CSS
                    </NavLink>
                    <NavLink exact="true"
                        to="/javascript"
                        activeclassname="active"
                        id="javascript-nav"
                        onClick={()=>{
                        name=document.getElementById("javascript-nav").innerText}}
                    >
                        JavaScript
                    </NavLink>
                    <NavLink
                        exact="true"
                        to="/php"
                        activeclassname="active"
                        id="php-nav"
                        onClick={()=>{
                        name=document.getElementById("php-nav").innerText}}
                    >
                        Php
                    </NavLink>
                    <NavLink
                        exact="true"
                        to="/python"
                        activeclassname="active"
                        id="python-nav"
                        onClick={()=>{
                        name=document.getElementById("python-nav").innerText}}
                    >
                        Python
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar
export {name}