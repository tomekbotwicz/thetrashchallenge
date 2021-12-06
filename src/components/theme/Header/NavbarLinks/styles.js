import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	font-size: 20pt;
	font-weight:bold;
	margin-left:auto;
	margin-right:auto;
	a {
		color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
		:hover {
			text-decoration:underline;
		}
			margin-right: 2rem;
			&:last-child {
					margin-right: unset;
			}
	}
`;


