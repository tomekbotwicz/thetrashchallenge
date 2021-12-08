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
import { Wrapper, BannerThumbnail, Modal, Chips, Shirt, Toothbrush, Bottle, Bag, BannerThumbnail1, BannerLogo, Content, ContentBodyLead, Line, ContentBody, ContentDetails, Alignment, ContentThumbnailRight, ButtonSoon, MobileLineBreak} from './styles';
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
<div class="feedback">psst...click on each image to learn more!</div>
</div>
        <Row>
          <Col sm={1}/>
          <Col sm={2.5}>
          <div id="main"></div>
          <Chips onClick={() => setModalChips(true)}>    
          <img src={chips} alt="the trash challenge logo"/>
          </Chips>
          </Col>
          <Col sm={1}/>
          <Col sm={3}>
          <Shirt onClick={() => setModalShirt(true)}>
          <img src={polyester} alt="the trash challenge logo"/>
          </Shirt>
          </Col>
          <Col sm={0.5}/>
          <Col sm={3}>
          <Toothbrush onClick={() => setModalBrush(true)}>
            
          <img src={toothbrush} alt="the trash challenge logo"/>
          </Toothbrush>
          </Col>
          <Col sm={1}/>
</Row>
<Row>
          <Col sm={1}/>
          <Col sm={3}>
          <Bottle onClick={() => setModalBottle(true)}>
          <img src={bottle} alt="the trash challenge logo"/>
          </Bottle>
          </Col>
          <Col sm={4}>
          <BannerLogo theme={theme}>
          <img src={logo} alt="the trash challenge logo"/>
          </BannerLogo>
          </Col>
          <Col sm={3}>
          <Bag onClick={() => setModalBag(true)}>
          <img src={bag} alt="the trash challenge logo"/>
          </Bag>
          </Col>
          <Col sm={1}/>
          </Row>

    <ContentDetails>
     
      <PureModal
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
        <h1>Ever wander the grocery store and mindlessly grab a bag of chips to snack on later? <b>I know I have.</b>
        <br/>But did you know that a chip bag, a composite material made of layers of polypropylene (plastic), low-density polyethylene (plastic), and aluminum, simply cannot be recycled.</h1>
      </PureModal>

      <PureModal
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
        <h1>Ever buy a shirt?</h1>
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
        <h1></h1>
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
        <h1></h1>
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
        <h1></h1>
      </PureModal>
      <Row>
      <Col sm={6}>
      <Alignment>
      <h3>Join the challenge!</h3>
      <br/>
      <Join/>
      <h4>
        <b>Good Recycling Practices:</b> <a href="https://learn.eartheasy.com/guides/recycling-basics-for-the-home/" target="_blank">eartheasy</a><br/>
        <b>How to Compost:</b> <a href="https://www.thespruce.com/how-to-compost-easy-steps-1708698" target="_blank">the spruce</a><br/>
        <b>101 Compostable Items:</b> <a href="https://www.sustainablejungle.com/zero-waste/what-is-compostable/" target="_blank">sustainable jungle</a>

      </h4>
      </Alignment>
        </Col>
        <Col sm={6}>
        <p>
        <b>Rules and guidelines:</b><br/>
      If you choose to sign up for The Trash Challenge, you should seek to reduce your trash footprint in two ways: 
      <br/><br/>
1. Commit to proper sortation and separation of trash, with recyclable plastics, paper, and metals going to recycling and all organics & soiled paper going to compost. All clothing should be recycled at textile recyclers or donated.
<br/><br/>
2. Ensure that all remaining trash is gathered and not disposed of. It must be kept inside of a receptacle smaller than 1ftx1ftx1ft in your room. Trash may be tossed at the end of the challenge.
</p>
        </Col>
      </Row>
      
      
    </ContentDetails>

    </Wrapper>
  );
};