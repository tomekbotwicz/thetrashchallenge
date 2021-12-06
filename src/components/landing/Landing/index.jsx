import React, { useContext, useState, ReactDOM, Component } from 'react';
import ReactModal from 'react-modal';
import { render } from 'react-dom';
import Collapsible from 'react-collapsible';
import { Row, Col } from 'react-grid-system';
import { ThemeContext } from 'providers/ThemeProvider';
import { StaticImage } from "gatsby-plugin-image";
import Fade from 'react-reveal/Fade'
import logo from 'assets/illustrations/logo.svg';
import chips from 'assets/illustrations/chips.png';
import bag from 'assets/illustrations/bag.png';
import toothbrush from 'assets/illustrations/toothbrush.png';
import polyester from 'assets/illustrations/polyester.png';
import bottle from 'assets/illustrations/bottle.png';

import { Header } from 'components/theme';
import { Wrapper, BannerThumbnail, Chips, Shirt, Toothbrush, Bottle, Bag, BannerThumbnail1, BannerLogo, Content, ContentBodyLead, Line, ContentBody, ContentDetails, ContentThumbnailRight, ButtonSoon, MobileLineBreak} from './styles';
import { Button } from 'components/common';
import { Typing } from "typing-effect-reactjs";
import { Link } from "gatsby";

import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

import Join from './Join';

export const Landing = () => {
  const [modal_chips, setModalChips] = useState(false);
  const [modal_shirt, setModalShirt] = useState(false);
  const [modal_toothbrush, setModalBrush] = useState(false);
  const [modal_bottle, setModalBottle] = useState(false);
  const [modal_bag, setModalBag] = useState(false);

  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <div id="mybutton">
<button class="feedback">psst...click on each image to learn more!</button>
</div>
        <Row>
          <Col sm={2.5}>
          <div id="main"></div>
          <Chips onClick={() => setModalChips(true)}>      
          <img src={chips} alt="the trash challenge logo"/>
          </Chips>
          </Col>
          <Col sm={2}/>
          <Col sm={3}>
          <Shirt onClick={() => setModalShirt(true)}>
          <img src={polyester} alt="the trash challenge logo"/>
          </Shirt>
          </Col>
          <Col sm={1.5}/>
          <Col sm={3}>
          <Toothbrush onClick={() => setModalBrush(true)}>
            
          <img src={toothbrush} alt="the trash challenge logo"/>
          </Toothbrush>
          </Col>
</Row>
<Row>
          <Col sm={3}>
          <Bottle onClick={() => setModalBottle(true)}>
          <img src={bottle} alt="the trash challenge logo"/>
          </Bottle>
          </Col>
          <Col sm={0.5}/>
          <Col sm={5}>
          <BannerLogo theme={theme}>
          <img src={logo} alt="the trash challenge logo"/>
          </BannerLogo>
          
          <Join/>
          </Col>
          <Col sm={0.5}/>
          <Col sm={3}>
          <Bag onClick={() => setModalBag(true)}>
          <img src={bag} alt="the trash challenge logo"/>
          </Bag>
          </Col>
          </Row>

    <ContentDetails>
     
      <PureModal
        header="Chips"
        width='60%'
        height='60%'
        isOpen={modal_chips}
        closeButton="X"
        closeButtonPosition="header"
        onClose={() => {
          setModalChips(false);
          return true;
        }}
      >
        <p></p>
      </PureModal>

      <PureModal
        header="Shirt"
        width='60%'
        height='60%'
        isOpen={modal_shirt}
        closeButton="X"
        closeButtonPosition="header"
        onClose={() => {
          setModalShirt(false);
          return true;
        }}
      >
        <p></p>
      </PureModal>

      <PureModal
        header="Toothbrush"
        width='60%'
        height='60%'
        isOpen={modal_toothbrush}
        closeButton="X"
        closeButtonPosition="header"
        onClose={() => {
          setModalBrush(false);
          return true;
        }}
      >
        <p></p>
      </PureModal>

      <PureModal
        header="Bottle"
        width='60%'
        height='60%'
        isOpen={modal_bottle}
        closeButton="X"
        closeButtonPosition="header"
        onClose={() => {
          setModalBottle(false);
          return true;
        }}
      >
        <p></p>
      </PureModal>

      <PureModal
        header="Bag o' plastic"
        width='60%'
        height='60%'
        isOpen={modal_bag}
        closeButton="X"
        closeButtonPosition="header"
        onClose={() => {
          setModalBag(false);
          return true;
        }}
      >
        <p></p>
      </PureModal>
    </ContentDetails>

    </Wrapper>
  );
};