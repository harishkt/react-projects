import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../../home/HomePage';
import HackerNews from '../../hackernews/HackerNews';
import About from '../../about/AboutPage';

const Header = () => {
	return(
		<div>
			<nav className="nav">
				<Link to="/">Home</Link>
				{ " | "}
				<Link to='/news'>HackerNews</Link>
				{ " | "}
				<Link to='/about'>About</Link>
			</nav>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/news' component={HackerNews} />
				<Route path='/about' component={About} />
			</Switch>
		</div>
	)
}
export default Header;