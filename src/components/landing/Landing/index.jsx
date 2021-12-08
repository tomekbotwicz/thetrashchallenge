import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import './circle.scss';
import { Wrapper, Center, Chips, Shirt, Toothbrush, Bottle, Bag, BannerLogo, Background, Details, Wrap, Button } from './styles';
import Join from './Join';
import logo from 'assets/illustrations/logo.svg';
import chips from 'assets/illustrations/chips.png';
import bag from 'assets/illustrations/bag.png';
import toothbrush from 'assets/illustrations/toothbrush.png';
import polyester from 'assets/illustrations/polyester.png';
import bottle from 'assets/illustrations/bottle.png';

export const Landing = () => {
  const [modal_chips, setModalChips] = useState(false);
  const [modal_shirt, setModalShirt] = useState(false);
  const [modal_toothbrush, setModalBrush] = useState(false);
  const [modal_bottle, setModalBottle] = useState(false);
  const [modal_bag, setModalBag] = useState(false);
  const [modal_rules, setModalRules] = useState(false);
  const [modal_resources, setModalResources] = useState(false);

  return (
  <Wrapper>
    <div class="tip">
      psst...click an image to learn more!
    </div>
    <div class="info">
      made by tomek with ❤️ | <a href="http://tomek.org" target="_blank" rel="noreferrer">tomek.org</a>
    </div>

    <Center>
      <ul class='circle-container'>
        <li>
          <Toothbrush onClick={() => setModalBrush(true)}>
            <img src={toothbrush} alt="the trash challenge logo"/>
          </Toothbrush>
        </li>
        <li>
          <Bottle onClick={() => setModalBottle(true)}>
            <img src={bottle} alt="the trash challenge logo"/>
          </Bottle>
        </li>
        <li>
          <Bag onClick={() => setModalBag(true)}>
            <img src={bag} alt="the trash challenge logo"/>
          </Bag>
        </li>
        <li>
          <Chips onClick={() => setModalChips(true)}>    
            <img src={chips} alt="the trash challenge logo"/>
          </Chips>
        </li> 
        <li>
          <Shirt onClick={() => setModalShirt(true)}>
            <img src={polyester} alt="the trash challenge logo"/>
          </Shirt>
        </li>
        <li>
          <Center>
          <BannerLogo>
            <img src={logo} alt="the trash challenge logo"/>
          </BannerLogo>
          <Join/>
          <Wrap>
            <Button onClick={() => setModalRules(true)}>rules</Button>
            <Button onClick={() => setModalResources(true)}>resources</Button>
          </Wrap>
          </Center>
        </li>
      </ul>
    </Center>

    <Details>
      <PureModal
        width='60%'
        height='60%'
        replace="true"
        isOpen={modal_chips}
        onClose={() => {
          setModalChips(false);
          return true;
        }}>
        <Background>
          <p>
            <h1>
              Chips:
            </h1>
            <br/>
              Ever wander the grocery store and mindlessly grab a bag of chips to snack on later? <b>I know I have.</b>
            <br/><br/>
              But did you know that a chip bag, a composite material made of layers of polypropylene (plastic), low-density polyethylene (plastic), and aluminum, simply cannot be recycled.
              It will stick around for <i>80 YEARS</i>. One of your legacies may be a Lay's bag.
            <br/>
            <br/>
            Alternatives:
            <br/>
            1. Check out the bulk section for healthy alternatives. There are delicious option you may not be aware of.
            <br/>
            2. If you must, try making your own chips! It takes about half an hour.  <a href="https://www.allrecipes.com/recipe/66646/potato-chips/" target="_blank" rel="noreferrer">Here's a recipe (allrecipes).</a>
            <br/>
            3. Importantly, don't beat yourself up if you do get some chips. This is an exercise in mindfulness, so add it to your trash challenge pile and move forward.
            <br/><br/>
            <a href="https://www.pinterest.com/pin/294563631856806485/" target="_blank" rel="noreferrer">Image source.</a>
          </p>
        </Background>
      </PureModal>

      <PureModal
        width='60%'
        height='60%'
        replace="true"
        isOpen={modal_shirt}
        onClose={() => {
          setModalShirt(false);
          return true;
        }}>
        <Background>
          <p>
            <h1>
              Clothing:
            </h1>
            <br/>
            Did you know that most of the clothes that you buy are actually made of plastic?
            <br/><br/>
            Polyester, an incredibly common material in nearly all clothing. Other unsustainable materials like rayon, nylon, and acrylic are also often used.
            <br/><br/>
            Alternatives:
            <br/>
            1. Buy clothing made from organic/natural fibers like cotton, hemp, and flax!
            <br/>
            2. Wash your unsustainable clothing in a special bag to prevent microplastics from entering your wastewater or install a filter.
            <br/><br/>
            <a href="http://www.pngall.com/t-shirt-png" target="_blank" rel="noreferrer">Image source.</a>
          </p>
        </Background>
      </PureModal>

      <PureModal
        width='60%'
        height='60%'
        replace="true"
        isOpen={modal_toothbrush}
        onClose={() => {
          setModalBrush(false);
          return true;
        }}>
        <Background>
          <p>
            <h1>
              Toothbrush:
            </h1>
            <br/>
            Remember how your dentist always reminds you to replace your toothbrush every 2 months?
            <br/><br/>
            Plastic toothbrushes, a recently modern invention, do not break down for at least 500 years.
            <br/>
            <a href="https://www.goingzerowaste.com/blog/the-life-of-a-toothbrush/" target="_blank" rel="noreferrer">The average person goes through 300 toothbrushes in their lifetime.</a>
            <br/><br/>
            Alternatives:
            <br/>
            1. Try to purchase a bamboo or "compostable" toothbrush next time you shop.
            <br/>
            2. If you want to go electric, get one that has replacable heads!
            <br/><br/>
            <a href="http://pngimg.com/download/75633" target="_blank" rel="noreferrer">Image source.</a>
          </p>
        </Background>
      </PureModal>

      <PureModal
        width='60%'
        height='60%'
        replace='true'
        isOpen={modal_bottle}
        onClose={() => {
          setModalBottle(false);
          return true;
        }}>
        <Background>
          <p>
            <h1>
              Bottles:
            </h1>
            <br/>
            Ubiquitous in the modern world, plastic bottles have come to completely dominate many supermarket coolers and shelves. They can be found in nearly every forest or lake and pervade cities and streets.
            <br/><br/>
            Luckily, most plastic bottles are easy to recycle given that they are made of #1 plastic. Unluckily, <a href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/plastics-material-specific-data" target="_blank" rel="noreferrer">only 29.1% of plastic bottles/jars</a> were actually recycled in 2018. We need reduction in usage, not recycling.
            <br/><br/>
            Alternatives:
            <br/>
            1. Aways carry a reusable water bottle. This is the singe biggest step you can take.
            <br/>
            2. If you need to purchase a bottled drink, look for something packaged in aluminum. It's infinitely recyclable and prevents more environmentally-damaging mining.
            <br/><br/>
            <a href="http://www.pngall.com/plastic-png" target="_blank" rel="noreferrer">Image source.</a>
        </p>
        </Background>
      </PureModal>

      <PureModal
        width='60%'
        height='60%'
        replace='true'
        isOpen={modal_bag}
        onClose={() => {
          setModalBag(false);
          return true;
        }}>
        <Background>
          <p>
            <h1>
              Bags (includes wraps/foils):
            </h1>
            <br/>
            The plastics that you probably toss in the trash most often are plastic bags/wraps/foils. Made from #4 plastic (you can find this number in the middle of the recylcing symbol...it's tiny), these items CANNOT be recycled nearly anywhere.
            <br/><br/>
            While they break down within "only" 10-100 years, these often shed into microplastics and aare eaten by non-human animals, leading to suffocation.
            <br/><br/>
            Alternatives:
            <br/>
            1. Bring your own reusable shopping bags anytime you go out to purchase something (these should be preferably undyed cotton, which is compostable).
            <br/>
            2. Check to see if a plastic wrap/foil is #4 plastic. You can do this by trying to stretch it. If it appears pliable, it's probably #4. Accumulate wraps/foils into a big ball and then <a href="hhttps://search.earth911.com/?what=plastic+bags&where=&list_filter=all&max_distance=25&family_id=&latitude=&longitude=&country=&province=&city=&sponsor=" target="_blank" rel="noreferrer">take them to a recycling location</a>.
            <br/><br/>
            <a href="http://pngimg.com/download/81757" target="_blank" rel="noreferrer">Image source.</a>
          </p>
        </Background>
      </PureModal>

      <PureModal
        width='60%'
        height='60%'
        replace="true"
        isOpen={modal_rules}
        onClose={() => {
          setModalRules(false);
          return true;
        }}>
        <Background>
          <p>
            <b>Rules and guidelines:</b>
            <br/>
            If you choose to sign up for The Trash Challenge, you should seek to reduce your trash footprint in two ways: 
            <br/><br/>
            1. Commit to proper sortation and separation of trash, with recyclable plastics, paper, and metals going to recycling and all organics & soiled paper going to compost. All clothing should be recycled at textile recyclers or donated.
            <br/><br/>
            2. Ensure that all remaining trash is gathered and not disposed of. It must be kept inside of a receptacle smaller than 1ftx1ftx1ft in your room. Trash may be tossed at the end of the challenge.
          </p>
        </Background>
      </PureModal>

      <PureModal
        width='50%'
        height='60%'
        replace="true"
        isOpen={modal_resources}
        onClose={() => {
          setModalResources(false);
          return true;
        }}>
        <Background>
          <h2>
            Recycling:
            <br/>
            <a href="https://learn.eartheasy.com/guides/recycling-basics-for-the-home/" target="_blank" rel="noreferrer">Good Recycling Practices (Eartheasy)</a>
            <br/><br/>
            Composting:
            <br/>
            <a href="https://www.thespruce.com/how-to-compost-easy-steps-1708698" target="_blank" rel="noreferrer">How to Compost (The Spruce)</a><br/>
            <a href="https://www.sustainablejungle.com/zero-waste/what-is-compostable/" target="_blank" rel="noreferrer">101 Compostable Items (Sustainable Jungle)</a>
          </h2>
        </Background>
      </PureModal>
    </Details>
  </Wrapper>
  );
};