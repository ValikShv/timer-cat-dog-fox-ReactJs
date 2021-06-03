import React, {useState} from "react"
import {Cat} from "../Cat/Cat";
import {Dog} from "../Dog /Dog";
import {Fox} from "../Fox/Fox";

export const Home = () =>  {

    return (
        <div>
            <div>
                home
            </div>
            <ul>
                <li><Cat /></li>
                <li><Dog /></li>
                <li><Fox /></li>
            </ul>
            {/*<img src={"https://cataas.com/" + `${response}`}/>*/}
        </div>

    )
}
