import React, { Component } from "react";
import * as Hey from "react";

export default class harmonyfile extends Component {
    state = {
        time: new Date(),
        void: null,
    };

    /**
     * this is a description
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        const variable = "hi there"
        console.log(event.currentTarget);
        if (true) {
            setTimeout(() => {
                alert(`you clicked me`);
            }, 5000);
        }
    }

    render() {
        return (
            <button id="clicker" onClick={this.clickHandler}>
                <ul id="list" class={`Menu ${4 * 20}`}>
                    <li>HTML Bruh</li>
                    <li>more &gt;</li>
                </ul>
            </button>
        );
    }
}
