import React , {useState} from "react"

const User = () =>{
    const [count, setCount]= useState(0)

    return(
        <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Count Increase</button>
        <h1>Ashis Kamani</h1>
        <h2>Location: Tempe, US</h2>
        <h3>Contact: @kamaniashish17</h3>
        </div>
    )
}

export default User