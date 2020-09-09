import React, { Component } from 'react'

export default class ControlledInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({input: e.target.value})
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.input}</h3>
                <label htmlFor="input">Type something</label>
                <input type="text" onChange={this.handleChange}></input>
            </div>
        )
    }
}
