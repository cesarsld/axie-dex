import React from 'react';
import styled from 'styled-components';
// own
import AxieList from './AxieList';
import BasicCenterContainer from './containers/BasicCenterContainer';
//import RadioButton from './ui/RadioButton/RadioButton';
import RadioGroup from './ui/RadioGroup/RadioGroup';

//CSS
const StyledAxieListControl = styled.div`
	.centerControl {display:flex; justify-content:center; align-items:center;}
	.centerControl .title {font-size:14px; font-weight:bold; color:#8e8e8e; margin-right:15px;}
	.radioButton {margin-right:5px; font-size:14px;}
`;

/**
 * Displays list of <Axie>'s
 * @example <AxieListControl axies={axies} features={"minimal" | "parts" | "stats" | "all"}/>
 * @class Axie
 * @extends {React.PureComponent}
 */
class AxieListControl extends React.PureComponent {
	constructor(props){
		super(props);
		this.state = {
			features: "minimal",
			size: "normal",
			active: true,
		}
	}

	setFeatures = (features) => {
		console.log("feat", features);
		this.setState((prevState)=>({
			features: features,
			active: !prevState.active
		}))
	}

	onOptionChange = (newOption) => {
		this.setState({
			features: newOption,
		})
	}

	onSizeChange = (newSize) => {
		this.setState({
			size: newSize,
		}, ()=>{
			console.log(this.state.size);
		})
	}

	render() {
		return (
				<BasicCenterContainer>
					<StyledAxieListControl>

					<div className="centerControl">
						<div className="title">Features</div>
						<RadioGroup class={"radiogroup"} options={[
							{label: "Stats", value: "stats"},
							{label: "Parts", value: "parts"},
							{label: "Minimal", value: "minimal"},
						]} active_option={"minimal"} onChange={this.onOptionChange}>
						</RadioGroup>

						<div className="title">Size</div>
							<RadioGroup class={"radiogroup"} options={[
								{label: "Normal", value: "normal"},
								{label: "Large", value: "large"},
							]} active_option={"normal"} onChange={this.onSizeChange}>
							</RadioGroup>
						</div>


						<AxieList axies={this.props.axies} features={this.state.features} size={this.state.size}/>
					</StyledAxieListControl>
				</BasicCenterContainer>
		);
	}
}

export default AxieListControl;