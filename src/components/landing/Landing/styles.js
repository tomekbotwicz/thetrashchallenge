import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 5rem;
  padding-left: 10rem;
  padding-right: 10rem;
  margin: 0;
  .text {
    background-color : #444444;
    color: #FFF;
    padding: 15px 20px;
    border-radius: 20px;
  }
  
  #info {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }

`;



export const Chips = styled.div`
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  margin-bottom: 5rem;
  transform: rotate(-15deg);
  cursor: pointer;
  img {
    width: 70%;
  }
  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
    
  }
`;

export const Shirt = styled.div`
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  cursor: pointer;
  margin-bottom: 5rem;
  transform: rotate(5deg);
  img {
    width: 80%;
  }
  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }
`;

export const Modal = styled.div`
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  cursor: pointer;
  margin-bottom: 5rem;
  transform: rotate(5deg);

  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }
`;

export const Toothbrush = styled.div`
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  cursor: pointer;
  margin-bottom: 5rem;
  img {
    width: 80%;
  }
  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }
`;

export const Bottle = styled.div`
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  cursor: pointer;
  margin-bottom: 5rem;
  transform: rotate(-10deg);
  margin-top: 3rem;
  img {
    width: 80%;
  }
  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }
`;

export const Bag = styled.div`
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  cursor: pointer;
  margin-bottom: 5rem;
  transform: rotate(20deg);
  img {
    width: 80%;
  }
  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }
`;
{/*filter: drop-shadow(10px 10px 7px rgba(214,212,209,0.5));*/}


export const BannerLogo = styled.div`
  transition: all 0.5s ease;
  filter: invert(1);
  pointer-events: none;
  margin-left:-2.3rem;
  margin-top:-5.5rem;
  margin-bottom:-4rem;
  @media (max-width: 1300px) {
    margin-top:-5rem;
    margin-left:-1.7rem;
  }
  @media (max-width: 960px) {
    margin-top:0rem;
    margin-bottom:-2rem;
  }
  width:150%;
  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }
`;

export const Content = styled.div`
`;

export const ContentBody = styled.div`
  padding: 1rem 0;
  align-items: center;
`;

export const ContentBodyLead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContentDetails = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }
  h1 {
    margin-bottom: 1rem;
    margin-top: 0.8rem;
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.3;
    text-align: left;
    color: black;
    a {
      text-decoration: underline;
    }
  }
  h2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 16pt;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    color: white;
    a {
      text-decoration: underline;
      color: lightblue;
    }
  }
  h3 {
    margin-top: 0rem;
    margin-bottom: -1rem;
    font-size: 16pt;
    font-weight: bold;
    text-align: center;
    color: white;
    a {
      text-decoration: underline;
      color: lightblue;
    }
  }
  h4 {
    margin-bottom: 1rem;
    margin-top: 0.8rem;
    font-size: 12pt;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => (theme === 'dark' ? '#000' : '#fff')};
    a {
      text-decoration: underline;
      color: lightblue;
    }
  }
  h5 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.5;
    text-align: left;
    padding:25px;
    color: white;
    a {
      text-decoration: underline;
      color: lightblue;
    }
  }
  p {
    margin-bottom: 1rem;
    margin-top: 0.8rem;
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.3;
    text-align: left;
    color: ${({ theme }) => (theme === 'dark' ? '#000' : '#fff')};
    a {
      text-decoration: underline;
      color: lightblue;
    }
  }
  a.linkstyle {
    text-decoration: underline;
    color: lightblue;
  }
`;

export const Background = styled.div`
  border: 3px solid black;
  border-radius: 20px;
  border-color: #FFF;
  background: black;
`;


export const Button = styled.button`
  width: auto;
  cursor: pointer;
  font-size: 10pt;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left:10%;
  margin-right:-10px;
  margin-top: -1rem;
  border: none;
  border-radius: 10px;
  transition: all 0.5s ease;
  background: #444444;
  color: ${({ theme }) => (theme === 'dark' ? '#000' : '#FFF')};
  :hover {
    box-shadow: ${({ theme }) => (theme === 'dark' ? 'inset 0 0 100px 100px #E5E5E5' : 'inset 0 0 100px 100px #444d56')};
  }
  @media only screen and (max-width: 407px) {
      border-radius: 10px;
    }
`;

export const RegisterButton = styled.button`
  width: auto;
  cursor: pointer;
  font-size: 10pt;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left:1.5rem;
  border: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.5s ease;
  background: #444444;
  color: #FFF;
  :hover {
    box-shadow: ${({ theme }) => (theme === 'dark' ? 'inset 0 0 100px 100px #E5E5E5' : 'inset 0 0 100px 100px #444d56')};
  }
  @media only screen and (max-width: 407px) {
      border-radius: 10px;
    }
`;

export const Input = styled.input`
  font-size: 10pt;
  padding: 8px;
  background: #DCDCDC;
  border: none;
  border-radius: 10px 0 0 10px;
  @media only screen and (max-width: 407px) {
      border-radius: 10px;
    }
`;