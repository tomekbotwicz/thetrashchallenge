import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 5rem;
  margin: 0;
  height: 100vh;
  .tip {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color : #444444;
    color: #FFF;
    padding: 15px 20px;
    border-radius: 20px;
  }
`;

export const Chips = styled.div`
  transition: all 0.5s ease;
  transform: rotate(-15deg);
  cursor: pointer;
  img {
    width: 75%;
  }
`;

export const Shirt = styled.div`
  transition: all 0.5s ease;
  transform: rotate(5deg);
  cursor: pointer;
  img {
    width: 80%;
  }
`;

export const Toothbrush = styled.div`
  transition: all 0.5s ease;
  cursor: pointer;
  img {
    width: 80%;
  }
`;

export const Bottle = styled.div`
  transition: all 0.5s ease;
  transform: rotate(-10deg);
  cursor: pointer;
  margin-top: 2rem;
  img {
    width: 80%;
  }
`;

export const Bag = styled.div`
  transition: all 0.5s ease;
  transform: rotate(20deg);
  cursor: pointer;
  img {
    width: 80%;
  }
`;

{/*@media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }*/}

export const BannerLogo = styled.div`
  transition: all 0.5s ease;
  filter: invert(1);
  pointer-events: none;
  margin-left:-2.3rem;
  margin-top:-5.5rem;
  margin-bottom:-4rem;
  width:150%;
  @media (max-width: 1300px) {
    margin-top:-5rem;
    margin-left:-1.7rem;
  }
  @media (max-width: 960px) {
    margin-top:0rem;
    margin-bottom:-2rem;
    margin-left: 1rem;
    width: 150%;
  }
`;

export const Background = styled.div`
  background: black;
  border: 3px solid #FFF;
  border-radius: 20px;
`;

export const Details = styled.div`
  text-align: center;
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.5;
    text-align: left;
    padding:25px;
    color: white;
  }
  h1 {
    margin-top: 0rem;
    margin-bottom: -1rem;
    font-size: 16pt;
    font-weight: bold;
    text-align: center;
    color: white;
  }
  h2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 16pt;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    color: white;
  }
  a {
    text-decoration: underline;
    color: lightblue;
  }
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
  color: #FFF;
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