import React, { useState } from 'react'
import Card from './Card'
import './style.css'

let playerPoint = 0;
let computerPoint = 0;
let matchNum = 0;
let bc = 'green'
export default function GamePage(props) {

    const [index, setIndex] = useState(0)

    const valid = () => {

        if (props.computer.cardArr[index] > props.player.cardArr[index]) {
            computerPoint++;
        }
        else if (props.computer.cardArr[index] < props.player.cardArr[index]) {
            playerPoint++;
        }

    }
    const nextCard = () => {

        if (index != 25) {
            setIndex(index + 1)
            matchNum++;
        }
        else {
            props.player.games++;
            if (computerPoint > playerPoint) {
                props.player.lastGame = 2;
                props.player.losses++;
            }
            else if (computerPoint < playerPoint) {
                props.player.lastGame = 1;
                props.player.wins++;
            }
            else {
                props.player.lastGame = 0;
            }
            computerPoint = 0;
            playerPoint = 0;
            matchNum = 0;

            props.setPage(2)
        }
    }
    return (
        <div className='pageDiv'>
            {valid()}
            <h1 style={{textAlign:'left'}}>{props.computer.name}</h1>
            <div className='gamePageDiv'>
                <div className='cardsDiv'>
                    <Card num={props.computer.cardArr[index]} />
                    <Card num={props.player.cardArr[index]} />
                </div>
                <div className='detailsDiv'>
                    <p>match number: {matchNum}</p>
                    <p>computer points: {computerPoint}</p>
                    <p>player points: {playerPoint}</p>
                </div>
            </div>
            <h1 style={{textAlign:'right'}}>{props.player.name}</h1>
            <button className='btn' onClick={nextCard}>NEXT</button>


        </div>
    )
}
