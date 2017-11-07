import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

// <img src={logo} className="App-logo" alt="logo" />
export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}