import React, { Component } from 'react'

export default class ToggleState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             theme: false
        }

        this.handleToggleTheme = this.handleToggleTheme.bind(this)
    }

    handleToggleTheme() {
        this.setState({ theme: !this.state.theme })
    }
    
    render() {
        const theme = this.state.theme;
        return (
            <div>
                Active Theme: 
                <button onClick={this.handleToggleTheme}>
                    <b>{theme ? 'Dark': 'Light'}</b>
                </button>
            </div>
        )
    }
}
