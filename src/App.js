import React, { Component } from 'react'
import snowman_step_7 from './images/step_7.png'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: 'snowman',
      // what state variable will we add to keep track of the letters chosen?
      lettersChosen: []
    }
  }

  shouldShowLetter = letter => {
    // if we should not show the letter, return _

    // if lettersChosen doeS contain letter
    // then return an letter
    if (this.state.lettersChosen.includes(letter)) {
      return letter
    }

    // If we should show the letter, return '_'
    return '_'
  }

  render() {
    return (
      <div className="App">
        <h1>Do you want to build a Snowman?</h1>

        <img src={snowman_step_7} alt="snowman" />
        <ul>
          <li>{}</li>
          <li>{this.shouldShowLetter('s')}</li>
          <li>{this.shouldShowLetter('n')}</li>
          <li>{this.shouldShowLetter('o')}</li>
          <li>{this.shouldShowLetter('w')}</li>
          <li>{this.shouldShowLetter('m')}</li>
          <li>{this.shouldShowLetter('a')}</li>
          <li>{this.shouldShowLetter('n')}</li>
        </ul>

        <div className="Alphabet">
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
          <button>E</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>I</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
          <button>M</button>
          <button>N</button>
          <button>O</button>
          <button>P</button>
          <button>Q</button>
          <button>R</button>
          <button>S</button>
          <button>T</button>
          <button>U</button>
          <button>V</button>
          <button>W</button>
          <button>X</button>
          <button>Y</button>
          <button>Z</button>
        </div>
      </div>
    )
  }
}

export default App
