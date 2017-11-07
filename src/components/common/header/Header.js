import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../../home/HomePage';
import Courses from '../../courses/CoursesPage';
import About from '../../about/AboutPage';

const Header = () => {
	return(
		<div>
			<nav className="nav">
				<Link to="/">Home</Link>
				{ " | "}
				<Link to='/courses'>Courses</Link>
				{ " | "}
				<Link to='/about'>About</Link>
			</nav>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/courses' component={Courses} />
				<Route path='/about' component={About} />
			</Switch>
		</div>
	)
}
export default Header;