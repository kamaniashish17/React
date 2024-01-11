import React from "react"

const ContactUs = ()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">
                Contact US Page
            </h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="textbox" className="border border-black p-2 m-2" placeholder="message" />
                <button className="border border-black bg-orange-400 p-2 m-2 text-lg rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs