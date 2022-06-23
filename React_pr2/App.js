import React from "react"
import Header from "./components/Header"
import Place from "./components/Place"
import data from "./data" 


export default function App(){
    
    const tab=data.map(item=>{
        return(
            
            <Place
                item={item}
            />
        )
    })
    
    
    
    return(
        <div>
        <Header/>
        <section>
        {tab}
        </section>
        </div>
            )
}