import React, {useState} from "react"

export const Cat = () =>  {
    const [response, setResponse] = useState();
    const postTimer = () => {
        fetch("https://cataas.com/cat?json=true")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result.url)
                    setResponse(result?.url)
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    setInterval(() => postTimer(), 5000)
    return (
        <>
            {/*<div onClick={postTimer}>*/}
                <h2>Cat</h2>
            {/*</div>*/}
            <div >
                <img src={"https://cataas.com/" + `${response}`} alt=""/>
            </div>
        </>
    )

}
