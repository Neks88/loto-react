import React, { Component } from 'react';
import Lottery from './Lottery';

export default class Pocetak extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types: [
                { name: "Lotto", maxNum: 40, numBalls: 7 },
                { name: "Lotto Daily", maxNum: 10, numBalls: 4 }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.types.map(type => <Lottery name={type.name} maxNum={type.maxNum} numBalls={type.numBalls} />)}
            </div>
        )
    }
}
