import React from 'react'
import './style.css'

export default function Table(props) {

  const showTableByOrder = () => {

    let tempArr = [...props.playerArr];
    tempArr.sort((a, b) => { return b.wins - a.wins })


    return tempArr.map((val) => {
      return <tr>
        <td className='td'>{val.name}</td>
        <td className='td'>{val.wins}</td>
        <td className='td'>{val.losses}</td>
        <td className='td'>{val.games}</td>
      </tr>
    })

  }

  return (
    <div className='table'>
      <table>
        <tr>
          <th className='th'>name</th>
          <th className='th'>wins</th>
          <th className='th'>losses</th>
          <th className='th'>games</th>
        </tr>

        {showTableByOrder()}
      </table>
    </div>
  )
}
