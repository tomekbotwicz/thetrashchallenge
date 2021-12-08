import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Details = styled.div`
  h1 {
    font-size: 30pt;
  }
  p {
    font-size: 15pt;
    font-weight: bold;
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }
`;
