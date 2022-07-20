// Code Keypad Component Here
import react from "react";



function Keypad(){
    function handleChange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input 
                type="password"
                name="search"
                onChange={handleChange}>
            </input> 
        </div>
    )
}
export default Keypad;