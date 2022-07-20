// Code EyesOnMe Component Here
import react from "react"



function EyesOnMe(){
    function focus(){
        console.log('Good!')
    }
    function blur(){
        console.log('Hey! Eyes on me!')
        }
    function attention(events){
        const events= true? focus() : blur()
    }
    
    return (
        <button>Eyes on me</button>
    )
}   
       
    
    
export default EyesOnMe