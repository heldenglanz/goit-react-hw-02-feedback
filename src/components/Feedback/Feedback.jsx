import React, { Component } from "react"

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
    }
    onGoodUp = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
                // total: prevState.total + 1
            }
        })
    }
    onNeutralUp = () => {
        this.setState((prevState) => {
            // console.dir(prevState)
            return {

                neutral: prevState.neutral + 1,

                // total: prevState.total + 1
            }

        })
    }
    onBadUp = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
                // total: prevState.total + 1
            }
        })
    }
    countTotalFeedback() {
        this.setState((prevState) => {
            console.dir(prevState)
            return {
                total: Number(prevState.good + prevState.neutral + prevState.bad)
            }
        })
    }



    render() {

        return (
            <>
                <h2>Please leave feedback</h2 >
                <button type="button" onClick={this.onGoodUp}>Good</button>
                <button type="button" onClick={this.onNeutralUp}>Neutral</button>
                <button type="button" onClick={this.onBadUp}>Bad</button >

                <h2>Statistics</h2 >
                <p>Good:{this.state.good}</p>
                <p>Neutral:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total:{this.state.total}</p>
            </>
        )
    }
}

export default Feedback