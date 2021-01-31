import styled from 'styled-components';

export const Page = styled.div`
	width: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const ErrorWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledForm = styled.form`
	height: 400px;
	padding: 20px;
	justify-content: space-between;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const FormRow = styled.div`
	height: 60px;
	width: 300px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SingleError = styled.div`
	margin-top: 18px;
	padding: 12px;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	width: 100%;
	border-radius: 8px;
	background-color: #e22134;
	user-select: none;
`;

export const ErrorText = styled.div`
	margin-left: 16px;
	font-size: 14px;
	font-weight: 500;
	color: #fff;
	font-family: sans-serif;
`;
