import React, {useState} from "react"

export const Dog = () =>  {
    const [message, setMessage] = useState();
    const postTimer = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    setMessage(result?.message)
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    setInterval(() => postTimer(), 15000)

    return (
        <>
            <div onClick={postTimer}><h2>Dog</h2></div>
            <div >
                <img src={`${message}`} alt=""/>
            </div>
        </>

    );
}
