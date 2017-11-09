import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../../home/HomePage';
import HackerNews from '../../hackernews/HackerNews';
import About from '../../about/AboutPage';
import ColorBox from '../../colorbox/ColorBoxes';
import ToDoApp from '../../todo/ToDoPage';

const Header = () => {
	return(
		<div>
			<nav className="nav">
				<Link to="/">Home</Link>
				{ " | "}
				<Link to='/news'>HackerNews</Link>
				{ " | "}
				<Link to='/about'>About</Link>
				{ " | "}
				<Link to='/colors'>ColorBox</Link>
				{ " | "}
				<Link to='/todo'>ToDoApp</Link>
			</nav>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/news' component={HackerNews} />
				<Route path='/about' component={About} />
				<Route path='/colors' component={ColorBox} />
				<Route path='/todo' component={ToDoApp} />
			</Switch>
		</div>
	)
}
export default Header;