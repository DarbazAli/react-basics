import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        this.handleInc = this.handleInc.bind(this)
        this.reset = this.reset.bind(this);
        this.handleDec = this.handleDec.bind(this);
    }

    handleInc() {
        this.setState({count: this.state.count + 1})
    }
    handleDec() {
        this.setState({count: this.state.count - 1})
    }
    reset() {
        this.setState({count: 0})
    }
    
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button className="button-primary" onClick={this.handleDec}>-</button>
                <button className="button-primary" onClick={this.reset}>RESET</button>
                <button className="button-primary" onClick={this.handleInc}>+</button>
            </div>
        )
    }
}
