import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* prefixes */
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

export const Details = styled.div`

  a {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    border-bottom: 1px dotted;
    text-decoration: none;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 30pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 15pt;
    font-weight: bold;
    line-height: 2;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;
