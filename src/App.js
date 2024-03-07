import './App.css';
import { useState } from 'react';
import HomePage from './Components/HomePage';
import GamePage from './Components/GamePage';
import ScorePage from './Components/ScorePage';


let player, computer;

function App() {
  const [playerArr, setPlayerArr] = useState([{}])
  const [page, setPage] = useState(0)
  const showPage = () => {
    if (page == 0) {
      return <HomePage playerArr={playerArr} start={initGame} />
    }
    else if (page == 1) {
      return <GamePage setPage={setPage} playerArr={playerArr} player={player} computer={computer} />
    }
    else {
      return <ScorePage playerArr={playerArr} initGame={initGame} setPage={setPage} player={player} />
    }
  }

  const initGame = (newName) => {
    let cardArr = [];
    let PlayerCards = [];
    let computerCards = [];
    let cards = new cardDeck();
    for (let i = 0; i < 26; i++) {
      PlayerCards.push(cards.dealCard())
      computerCards.push(cards.dealCard())
    }
    const resolt = playerArr.filter((player) => player.name == newName)
    if (resolt.length > 0) {
      player = resolt[0];
      computer = new Player('computer', computerCards);
    }
    else {
      player = new Player(newName, PlayerCards);
      computer = new Player('computer', computerCards);
      setPlayerArr([...playerArr, player])
    }


    setPage(1)
  }


  return (
    <div className="App">
      {showPage()}
    </div>
  );
}

export default App;


class Player {
  wins = 0;
  losses = 0;
  games = 0;
  lastGame = 0;

  constructor(name, cardArr) {
    this.name = name;
    this.cardArr = cardArr;
  }
}

class cardDeck {
  cards = [];

  constructor() {
    this.initCard()
  }

  initCard() {
    for (let i = 1; i <= 13; i++) {
      for (let j = 0; j <= 4; j++) {
        this.cards.push(i)
      }
    }
  }

  dealCard() {
    let rand = Math.floor(Math.random() * this.cards.length);
    let card = this.cards.splice(rand, 1);
    return card[0];
  }
}

