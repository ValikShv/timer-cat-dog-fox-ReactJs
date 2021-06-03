import React, {useState} from "react"

export const Fox = () =>  {
    const [image, setImage] = useState();
    const postTimer = () => {
        fetch("https://randomfox.ca/floof/")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    setImage(result?.image)
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    setInterval(() => postTimer(), 10000)

    return (
        <>
            <div onClick={postTimer}><h2>Fox</h2></div>
            <div >
                <img src={`${image}`} alt=""/>
            </div>
        </>);
}
