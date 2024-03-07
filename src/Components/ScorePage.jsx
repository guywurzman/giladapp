import React from 'react'
import './style.css'

export default function ScorePage(props) {

    const showTitle = () => {
        if (props.player.lastGame == 0) {
            return <h3 style={{ color: 'yellow' }}>DRAW</h3>
        }
        else if (props.player.lastGame == 1) {
            return <h3 style={{ color: 'forestgreen' }}>WIN</h3>

        }
        else {
            return <h3 style={{ color: 'red' }}>LOSE</h3>
        }
    }

    const rematch = () => {
        props.initGame(props.player.name)
        props.setPage(1)
    }


    return (
        <div className='pageDiv'>
            <h1>score page</h1>
            {showTitle()}
            <h5 style={{ color: 'red' }}> total score : wins: {props.player.wins} - losses: {props.player.losses}</h5>
            <div style={{display:'flex' ,justifyContent: "space-around"}}>
            <button className='btn' onClick={rematch}>AGAIN</button>
            <button className='btn' onClick={()=>{props.setPage(0)}}>NEW GAME</button>
            </div>
        </div>
    )
}
