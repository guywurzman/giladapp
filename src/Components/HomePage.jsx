import React, { useState } from 'react'
import Table from './Table';

export default function HomePage(props) {

  const [userName, setUserName] = useState('')
  const [tableFlag, setTableFlage] = useState(false)


  const valid = () => {
    if (userName.length == 0) {
      alert('error');
    }
    else {
      props.start(userName);
    }
  }
  const showTable = () => {
    if (tableFlag == true) {
      return <Table playerArr={props.playerArr} />
    }
    else {
      return null;
    }
  }
  return (
    <div className='pageDiv'>
      <h1>ready for war</h1>
      <input onChange={(e) => { setUserName(e.target.value) }} type='text' placeholder='input your name...' /><br />
      <button className='btn' onClick={valid}>START</button>
      <br />
      <button className='btn' onClick={() => { setTableFlage(!tableFlag) }}>SCORE</button>
      {showTable()}
    </div>
  )
}
