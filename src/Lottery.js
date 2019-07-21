import React, { Component } from 'react';
import Ball from "./Ball";

export default class Lottery extends Component {
    // static defaultProps = {
    //     title: "Lotto",
    //     numBalls: 6,
    //     maxNum: 40
    // };
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.numBalls })
        }
        this.handleClick = this.handleClick.bind(this);

    }
    generate() {

        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));

        console.log("hell2")


    }
    handleClick() {
        console.log('hello');
        this.generate();
    }

    render() {

        return (
            <div>
                <h1>{this.props.name}</h1>
                {this.state.nums.map(lopta => <Ball data={lopta} />)}
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}
