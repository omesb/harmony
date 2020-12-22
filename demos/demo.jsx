import React, { Component } from 'react';
import Hey from 'react';

const name = 899;
export default class Demo extends Component {
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
		this.state.time = 0;
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(event) {
		console.log(event.currentTarget);
		if (true) {
			setTimeout(() => {
				alert(`you clicked me`);
			}, 5000);
		}
	}

	render() {
		return (
			<button class={`button ${name}`} onClick={this.clickHandler}>
				<ul id="list" class={`Menu ${4 * 20}`}>
					<li>HTML Bruh</li>
					<Hey>more &gt;</Hey>
				</ul>
			</button>
		);
	}
}
