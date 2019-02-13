import React from 'react';
//import styled, { css } from "styled-components";
// CSS
import {StyledExpansionPanel} from "./styles/StyledExpansionPanel";

/**
 * Renders a simple text input and a label
 * @example <RadioButton text={text} active={true | false} html={} onChange={function(){}}/>
 */
class ExpansionPanel extends React.PureComponent {

	constructor(props){
		super(props);
		this.state = {
			open: this.props.open,
		}
	}

	handleClickLabel = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}

	render() {
		const label = this.props.label;
		const content = this.props.content;
		const closedContent = this.props.closedContent;
		const open = this.state.open;

		return (
			<StyledExpansionPanel>
				<div className="panel-label" onClick={this.handleClickLabel}>
					<div className="label-text">{label}</div>
					{!open &&
						<div className="panel-closed-content">
							{closedContent}
						</div>
					}
				</div>

				{open &&
					<div className="panel-content">
						{content}
					</div>
				}
			</StyledExpansionPanel>
		);
	}
}

export default ExpansionPanel;