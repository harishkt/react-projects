import React, { Component } from 'react';
import './ColorBoxes.css';
import _ from 'lodash';
const Color = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.functionMultiple = this.functionMultiple.bind(this);
		this.getRandomColor = this.getRandomColor.bind(this);
	}

	rand() {
		return Math.round(Math.random() * 255);
	}

	getRandomColor() {
		return {
			root: {
				background: `rgb('${this.rand()},${this.rand()},${this.rand()})`,
				backgroundColor: _.sample(Color)
			}
		}
	}

	functionMultiple() {
		const newList = _.range(this.props.count);
		const boxList = newList.map((id) => {
			const color = this.getRandomColor().root;
			return(
				<div key={id.toString()} className='box' style={color} id={id}>
				</div>
			)
		})
		return boxList
	}

	render() {
		const data = this.functionMultiple();
		return(
			<div className='boxcontainer'>
				{data}
			</div>
		);
	}
}

class ColorBoxes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		}
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.play(),
			50
		);
	}
	play(){
		const { count } = this.state;
		if (count < 75) {
			this.setState((prevState) => ({
				count: prevState.count + 1
			}));
		}
		if (count === 75) {
			this.setState({count: 1})
		}
	}

	render() {
		const { count } = this.state;
		return(
			<div>
				<ColorBox count={count}/>
			</div>
		)
	}
}
export default ColorBoxes;