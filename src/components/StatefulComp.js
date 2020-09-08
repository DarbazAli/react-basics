import React, { Component } from 'react'


export default class StatefulComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'freeCodeCamp'
        }
    }


    
    render() {
        const name = this.state.name;
        return (
            <div>
                name: <b>{name}</b>
                <button 
                    onClick={() => this.setState({name: 'Anonymos'})}>Change Name</button>
            </div>
        )
    }
}


