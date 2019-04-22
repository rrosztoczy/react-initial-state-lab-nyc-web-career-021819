import React, { Component } from 'react'
// your Bomb code here!

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render () {
        return ( this.state.secondsLeft != 0 ? <div>{this.state.secondsLeft} seconds left before I go boom!</div> : <div>Boom!</div>)
    }
}