import React, { Component } from 'react';
import styled from "styled-components";

//CSS
const StyledStatusBox = styled.div`
	.box {color: #797979;font-size: 14px; width:300px; height: auto; padding:15px; border:1px solid #cecece; border-radius:8px;}
`;

/**
 * Renders {status_message} in a box
 * @class StatusBox
 * @example <StatusBox status={status}/>
 */
function StatusBox(props) {
	return (
		<StyledStatusBox>
			<div className="box">{props.status.msg}</div>
		</StyledStatusBox>
	);
}

export default StatusBox;