import * as React from 'react';

import styled, {css} from 'styled-components';
import {hexToRgbA} from "../../utils/color";

import {ToggleBaseProps, StyledToggleBase} from "../ToggleBase";

const StyledChip = styled(StyledToggleBase)<{isOn?:boolean, color:string}>`
	background: rgba(0,0,0,0.031);
	border-radius: 50px;
	border: 1px solid rgba(0,0,0,0.11);

	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	${props => props.isOn && `
		&.isOn {
			color: #313131;
			font-weight: 500;
			background: #d6d6d6;
			border: 1px solid #848484;
			${props.color && `
			background: ${hexToRgbA(props.color, 0.14)};
			border:1px solid ${hexToRgbA(props.color, 0.5)};
			color: ${hexToRgbA(props.color, 0.9)};
			`}
		}
	`}
`;

export const Chip:React.FC<ToggleBaseProps> = (props:ToggleBaseProps) => {
	const {label, children, color, isOn, onClick, ...other} = props;
	return (
	<StyledChip color={props.color} isOn={props.isOn} className={props.isOn ? "isOn" : ""} onClick={props.onClick} {...other}>
		{props.label || props.children}
	</StyledChip>
)};