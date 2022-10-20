import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {isHead: true, heads: 0, tails: 0}

  toss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const head = tossResult === 0 ? true : false
    return head
  }

  updateToss = () => {
    const tossResult = this.toss

    const {heads, tails} = this.state
    const headsCount = tossResult && heads + 1
    const tailsCount = !tossResult && tails + 1
    this.setState({isHead: tossResult, heads: headsCount, tails: tailsCount})
  }

  render() {
    const {isHead, heads, tails} = this.state
    const total = heads + tails
    const image = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1>Coin Toss Game</h1>
          <p>Head(or)Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button type="button" onClick={this.updateToss}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="description">Total: {total}</p>
            <p className="description">Heads: {heads}</p>
            <p className="description">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
