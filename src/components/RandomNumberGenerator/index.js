// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(() => ({number: randomNum}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="random-number-container">
        <div className="random-number-card-container">
          <h1 className="heading">Random Number</h1>
          <p className="details">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.randomNumber}>
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
