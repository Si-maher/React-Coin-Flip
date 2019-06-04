import React, { Component } from "react"
import Coin from "./Coin"
import Head from "./Images/Head.jpeg"
import Tails from "./Images/Tails.jpeg"
import { choice } from "./Helpers"

class CoinContainer extends Component {
    static defaultProps = {
        // *Coins is an Array that contains these objects
        coins: [

            { side: "heads", imgSrc: Head },
            { side: "tails", imgSrc: Tails }
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            //    * when the page loads, no coin is displayed, totals are set to 0.

            currentCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    flipCoin() {
        const newCoin = choice(this.props.coins)
        this.setState(st => {
            return {
                currentCoin: newCoin,
                numFlips: st.numFlips + 1,
                numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
                numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })

    }
    handleClick(e) {
        this.flipCoin()
    }
    render() {
        return (
            <div className="CoinContainer">
                <h2>Let's Flip A Coin!!!</h2>
                <button onClick={this.handleClick}>Flip Me!!</button>
                {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
                <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails</p>

            </div >
        )
    }
}

export default CoinContainer