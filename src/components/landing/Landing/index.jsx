import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-grid-system';
import { ThemeContext } from 'providers/ThemeProvider';
import logo from 'assets/illustrations/logo.svg';
import chips from 'assets/illustrations/chips.png';
import bag from 'assets/illustrations/bag.png';
import toothbrush from 'assets/illustrations/toothbrush.png';
import polyester from 'assets/illustrations/polyester.png';
import bottle from 'assets/illustrations/bottle.png';

import { Wrapper, Chips, Shirt, Toothbrush, Bottle, Bag, BannerLogo, ContentDetails, Alignment} from './styles';

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
      <div id="info">
<div class="text">psst...click on each image to learn more!</div>
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
        <br/>
        <br/>But did you know that a chip bag, a composite material made of layers of polypropylene (plastic), low-density polyethylene (plastic), and aluminum, simply cannot be recycled.
        It will stick around for <i>80 YEARS</i>. One of your legacies may be a Lay's bag.
        <br/>
        <br/>
        Alternatives:
        <br/>1. Check out the bulk section for healthy alternatives. There are delicious option you may not be aware of.
        <br/>2. If you must, try making your own chips! It takes about half an hour. Here's a recipe: <a href="https://www.allrecipes.com/recipe/66646/potato-chips/" target="_blank" rel="noreferrer">allrecipes</a>
        <br/>3. Importantly, don't beat yourself up if you do get some chips. This is an exercise in mindfulness, so add it to your trash challenge pile and move forward.
        <br/><br/>
        <a href="https://www.pinterest.com/pin/294563631856806485/" target="_blank" rel="noreferrer">Image source.</a>
        </h1>
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
        <h1>Did you know that most of the clothes that you buy are actually made of plastic?
        <br/>
        <br/>Polyester, an incredibly common material in nearly all clothing. Other materials like rayon are also used often.
        <br/>
        <br/>
        Alternatives:
        <br/>1. Buy clothing made from organic/natural fibers like cotton, hemp, and flax!
        <br/>2. Wash your plastic clothing in a special bag to prevent microplastics from entering your wastewater.
        <br/><br/>
        <a href="http://www.pngall.com/t-shirt-png" target="_blank" rel="noreferrer">Image source.</a>
        </h1>
      </PureModal>

      <PureModal
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
        <h1>Remember how your dentist always reminds you to replace your toothbrush every 2 months?
          <br/><br/>
          Plastic toothbrushes, a recently modern invention, do not break down for at least 500 years.
          <br/>
          <a href="https://www.goingzerowaste.com/blog/the-life-of-a-toothbrush/" target="_blank" rel="noreferrer">The average person goes through 300 toothbrushes in their lifetime.</a>
          <br/><br/>
          Alternatives:
          <br/>
          1. Try to purchase a bamboo or "compostable" toothbrush next time you shop ,
          <br/>2. If you want to go electric, get one that has replacable heads!
          <br/><br/>
          <a href="http://pngimg.com/download/75633" target="_blank" rel="noreferrer">Image source.</a>

        </h1>
      </PureModal>

      <PureModal
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
        <h1>Will be posted soon!</h1>
      </PureModal>

      <PureModal
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
        <h1>Will be posted soon!</h1>
      </PureModal>
      <Row>
      <Col sm={6}>
      <Alignment>
      <h3>Join the challenge!</h3>
      <br/>
      <Join/>
      <h4>
        <b>Good Recycling Practices:</b> <a href="https://learn.eartheasy.com/guides/recycling-basics-for-the-home/" target="_blank" rel="noreferrer">eartheasy</a><br/>
        <b>How to Compost:</b> <a href="https://www.thespruce.com/how-to-compost-easy-steps-1708698" target="_blank" rel="noreferrer">the spruce</a><br/>
        <b>101 Compostable Items:</b> <a href="https://www.sustainablejungle.com/zero-waste/what-is-compostable/" target="_blank" rel="noreferrer">sustainable jungle</a>

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