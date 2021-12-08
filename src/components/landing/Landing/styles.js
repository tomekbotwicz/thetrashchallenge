import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 5rem;
  padding-left: 10rem;
  padding-right: 10rem;
  margin: 0;
  @media (min-width:370px) and (max-width:380px) {
    margin-bottom: 1rem;
  }
  .feedback {
    background-color : #133337;
    color: white;
    padding: 10px 20px;
    border: 3px solid black;
    border-radius: 4px;
    border-color: #0D2326;
  }
  
  #mybutton {
    position: fixed;
    top: 10px;
    right: 10px;
  }
`;

export const Chips = styled.div`
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  margin-bottom: 5rem;
  filter: drop-shadow(10px 10px 7px rgba(255,255,0,0.5));
  transform: rotate(-15deg);
  cursor: pointer;
  img {
    width: 80%;
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
  filter: drop-shadow(10px 10px 7px rgba(255,255,255,0.5));
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
  filter: drop-shadow(10px 10px 7px rgba(255,255,255,0.5));
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
  filter: drop-shadow(10px 10px 7px rgba(125,249,255,0.5));
  transform: rotate(10deg);
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
  filter: drop-shadow(10px 10px 7px rgba(0,109,176,0.5));
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
  filter: drop-shadow(10px 10px 7px rgba(214,212,209,0.5));
  transform: rotate(20deg);
  img {
    width: 80%;
  }
  @media (max-width: 960px) {
    width: 80%;
    margin-left: 1rem;
  }
`;

export const BannerLogo = styled.div`
  transition: all 0.5s ease;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  pointer-events: none;
  margin-top: -5rem;

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
      color: lightblue;
    }
  }
  h3 {
    margin-bottom: 0rem;
    font-size: 20pt;
    font-weight: bold;
    line-height: 1;
    color: ${({ theme }) => (theme === 'dark' ? '#000' : '#fff')};
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
  u.dotting {
    border-bottom: 1px dotted;
    text-decoration: none;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    cursor: help;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 180px;
    background-color: #444d56;
    color: white;
    text-align: center;
    border-radius: 30px;
    padding: 15px;
    font-size: 1rem;
    opacity: 0;
    transition: all .3s ease-in-out;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: -100px;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 0.85;
    transform: scale(1.1);
  }
  a.linkstyle {
    text-decoration: underline;
    color: lightblue;
  }
  a.emergence {
    text-decoration: underline;
    color: red;
  }
`;

export const ContentThumbnailLeft = styled.div`
  flex: 1;
  pointer-events: none;

  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }
`;


export const Alignment = styled.div`
  padding: 70px 0;
`;

export const RegisterButton = styled.button`
  width: auto;
  cursor: pointer;
  font-size: 14pt;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.5s ease;
  background: ${({ theme }) => (theme === 'dark' ? '#FFF' : '#000')};
  color: ${({ theme }) => (theme === 'dark' ? '#000' : '#FFF')};
  :hover {
    box-shadow: ${({ theme }) => (theme === 'dark' ? 'inset 0 0 100px 100px #E5E5E5' : 'inset 0 0 100px 100px #444d56')};
  }
  @media only screen and (max-width: 407px) {
      border-radius: 10px;
      margin-top: 4%;
    }
`;

export const Input = styled.input`
  font-size: 14pt;
  padding: 10px;
  background: #DCDCDC;
  border: none;
  border-radius: 10px 0 0 10px;
  margin-left: 2rem;
  @media only screen and (max-width: 407px) {
      border-radius: 10px;
    }
`;