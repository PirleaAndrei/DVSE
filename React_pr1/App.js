import React from "react"
import About from "./components/About"
import Top from "./components/Top"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div>
        <Top/>
        <About/>
        <Interests/>
        <Footer/>
        </div>
    )
}
