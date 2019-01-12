import styled, {css} from 'styled-components';

//CSS
export const StyledMethod = styled.div`

	background:white;
	/*box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18); */
	/* box-shadow:none; */
	border: 1px solid #dedede;
	padding: 30px;
	margin-bottom: 30px;
	border-radius: 8px;

	h2 {margin:0;}

	/* titleBar */
	.titleBar {display:flex; align-items:center; margin-bottom:20px;}
	.titleBar .tag {margin-left:15px; display: inline-flex; padding: 2px 5px; border-radius: 3px; color: white; font-size: 12px;}
	.constant {background: #3bb0ea; }
	.event { background: #fba92a; }
	.payable { background: #ff0000; }
	/* columns */
	.columns {display:flex; justify-content: space-between;}
	.input {display: flex; flex-flow: column; width:280px;}
	.output {display: flex; flex-flow: column;}
	.output_field {width:350px;}

	/* callBar */
	.callBar {display:flex; justify-content:flex-end;}
	
	.button { padding: 11px 18px; text-transform:uppercase;}

	/* x state */
	${({ x }) => x && css``}
`;