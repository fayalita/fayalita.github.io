import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Row,
  Container,
} from 'react-bootstrap';
import { Element, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import PresentationItem from '../../components/PresentationItem/PresentationItem';
import Section from './Section';
import styles from './Home.module.css';

const onSelect = (selectedKey) => {
  if (selectedKey === '#resume') {
    return;
  }
  scroller.scrollTo(selectedKey, {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: -80, // Scrolls to element + 50 pixels down the page
  });
};

const onDrawerSelect = (selectedKey) => {
  if (selectedKey === '#resume') {
    return;
  }
  scroller.scrollTo(selectedKey, {
    duration: 0,
    delay: 0,
    offset: -80, // Scrolls to element + 50 pixels down the page
  });
};

const aridaData = {
  title: 'Árida: Backlands Awakening',
  details: '(C#, Unity) - 2019',
  desc: 'An adventure game focused on story with elements of exploration and survival, developed for PC.',
  bulletPoints: [
    'Dialogue, crafting and inventory systems',
    'Input handler',
    'A lot of UI like crafting and inventory menus, pause screen, HUD, settings, etc',
    'Optimization',
    'Gameplay events through XML',
    'Trees leaves shader',
    'Player interaction with items',
    'Sounds management',
  ],
  images: [
    'arida.jpg',
    'arida-gif1.gif',
    'arida2.jpg',
    'arida3.jpg',
    'arida-gif2.gif',
  ],
  icon: 'steam.svg',
  url: 'https://store.steampowered.com/app/907760/Arida_Backlands_Awakening',
};

const guardioesData = {
  title: 'Guardiões da Floresta Gamebook',
  details: '(C#, Unity) - 2016',
  desc: 'A hybrid  media  designed  for  children, mixing adventure, comics and puzzles. Developed for mobile.',
  bulletPoints: [
    'Character movement and animations',
    'Dialogue, crafting and inventory systems',
    'Quests',
    'Isometric depth sorting',
    'Patrollers and stealth mechanic',
    'Most of UI elements, except puzzles',
  ],
  images: [
    'guardioes1.jpg',
    'guardioes2.jpg',
    'guardioes3.jpg',
    'guardioes6.jpg',
  ],
  icon: 'google-play.svg',
  url: 'https://play.google.com/store/apps/details?id=com.CV.GBookGuardioes',
};

const salvadorsimData = {
  title: 'Salvador Sim',
  details: '(AS3, Flash) - 2013',
  desc: 'A city builder and isometric game where the player must manage the city so it can be ready for the World Cup. Developed for PC.',
  bulletPoints: [
    'Load of levels from specified data, such as goals, textures, buildings, sound emitters, etc',
    'Buildings mechanics',
    'City stats management and player experience points',
    'Some of the UI',
  ],
  images: [
    'salvadorsim3.jpg',
    'salvadorsim2.jpg',
    'salvadorsim.jpg',
  ],
  icon: 'web.svg',
  url: 'http://comunidadesvirtuais.pro.br/cv/games/#9',
};

const industrialiData = {
  title: 'Industriali',
  details: '(AS3, Flash) - 2012',
  desc: 'A simulation and isometric game where the player must manage a city in England going through the Industrial Revolution. Developed for PC.',
  bulletPoints: [
    'Load of maps and constructions data',
    'Buildings\' productions, maintenance, costs and upgrades',
    'Tutorial and quests',
    'All UI',
    'Editor mode for map creation',
  ],
  images: [
    'industriali3.jpg',
    'industriali2.jpg',
    'industriali.jpg',
  ],
  icon: 'web.svg',
  url: 'http://comunidadesvirtuais.pro.br/cv/games/#6',
};

const buziosData = {
  title: 'Búzios: Ecos da Liberdade',
  details: '(AS3, Flash) - Internship - 2011',
  desc: 'A 2D point and click adventure game about a revolt that occured in Brazil in 1798. Developed for PC.',
  bulletPoints: [
    'Test and fix bugs',
    'Created XML files for scenes, characters and items',
    'Save and load',
    'Some of the UI',
  ],
  images: [
    'buzios.jpg',
    'buzios2.jpg',
    'buzios3.jpg',
    'buzios4.jpg',
    'buzios5.jpg',
    'buzios6.jpg',
  ],
  icon: 'web.svg',
  url: 'http://www.comunidadesvirtuais.pro.br/buzios/downloads/#gold',
};

const summonekoData = {
  title: 'SummoNeko',
  details: '(C#, Unity) - 2016',
  desc: 'SummoNeko is a 2d game where a cat try to invoke the devil to make your wishes come true. The player must use the keyboard to complete a correct sequence of moves before the human finds out what\'s happening. This game was made in the Global Game Jam of 2016. I\'ve participated in the design.',
  bulletPoints: [],
  images: [
    'summoneko1.jpg',
    'summoneko2.jpg',
    'summoneko3.jpg',
  ],
  icon: 'web.svg',
  url: 'https://globalgamejam.org/2016/games/summoneko',
};

const fistfulData = {
  title: 'A Fistful of Feathers',
  details: '(C++) - 2013',
  desc: 'Infinite runner game, 2D platformer, in which the player controls a cowboy riding an ostrich in an old west environment. Developed for mobile. This game was developed while I was studying for a year in Kajaani University of Applied Sciences, during one of the courses. I\'ve participated in the design and the audio programming.',
  bulletPoints: [],
  images: [
    'fistful.jpg',
    'fistful-gif.gif',
  ],
  icon: 'google-play.svg',
  url: 'https://play.google.com/store/apps/details?id=com.TeamRiver.FistfulOfFeathers&hl=en',
};

const professionalProjects = [
  aridaData,
  guardioesData,
  salvadorsimData,
  industrialiData,
  buziosData,
];

const sideProjects = [
  summonekoData,
  fistfulData,
];

const presentationData = [
  {
    title: 'Workshop: Game Programming with Unity',
    date: 'October 31st, 2018',
  }, {
    title: 'Female representation in games and in the industry',
    date: 'March 8th, 2018',
  }, {
    title: 'Women in Games',
    date: 'July 30th, 2015',
  },
];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      drawerOpen: false,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleOpenDrawer = () => {
    this.setState({ drawerOpen: true });
  }

  handleCloseDrawer = () => {
    this.setState({ drawerOpen: false });
  }

  render() {
    const { width, drawerOpen } = this.state;
    const isMobile = width <= 500;
    const aboutMe1 = 'Hi there! (ﾉ･ω･)ﾉﾞ I\'m Laiza Camurugy and I\'ve been passionately developing games since 2009. I graduated in Computer Science from UFBA, which gave me a great mathematical and logical basis, as well as good programming skills.';

    const aboutMe2 = 'I started in this career as an intern during the development process of a 2D adventure game shipped by Comunidades Virtuais. Since then, I\'ve developed as a part of the team an amount of 4 games (3 for PC, 1 for mobile), using AS3 and C# as programming languages, Flash and Unity as technologies. Later on, I spent a year studying Game Development at Kajaani University of Applied Sciences, learning the development process using C++. Thereafter, I\'ve participated developing Árida: Backlands Awakening at Aoca Game Lab from 2016 to the beginning of 2019.';
    const aboutMe3 = 'I like game dev because besides working with code and math, I can be in touch with areas that I\'ve always admired, like music, art and narrative. Beyond that, the most obvious motive is that I love playing games! It was love at first sight, when my father bought a megadrive with the Sonic tape together ❤.';

    const navLinks = (
      <Navbar.Collapse id="responsive-navbar-nav" style={{ marginTop: '8px' }}>
        <Nav className="mr-auto" onSelect={onSelect}>
          <Nav.Link href="#aboutme">
            <MaterialIcon icon="face" size={20} color="#ffffff" />
            <span className={styles.navitem}>
              About me
            </span>
          </Nav.Link>
          <Nav.Link href="#professional">
            <MaterialIcon icon="work" size={20} color="#ffffff" />
            <span className={styles.navitem}>
              Professional projects
            </span>
          </Nav.Link>
          <Nav.Link href="#side">
            <MaterialIcon icon="games" size={20} color="#ffffff" />
            <span className={styles.navitem}>
              Side projects
            </span>
          </Nav.Link>
          <Nav.Link href="#presentation">
            <MaterialIcon icon="record_voice_over" size={20} color="#ffffff" />
            <span className={styles.navitem}>
              Presentations
            </span>
          </Nav.Link>
          <Nav.Link href="Emmanuel_Argollo_CV.pdf" target="_blank">
            <MaterialIcon icon="attach_file" size={20} color="#ffffff" />
            <span className={styles.navitem}>
              Résumé
            </span>
          </Nav.Link>
          <Nav.Link href="#contactme">
            <MaterialIcon icon="question_answer" size={20} color="#ffffff" />
            <span className={styles.navitem}>
              Contact Me
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    );

    const sideNav = (
      <div className={styles.menuWraper}>
        <div style={{ cursor: 'pointer' }} onClick={this.handleOpenDrawer} role="none" onKeyDown={() => {}}>
          <MaterialIcon icon="menu" size={42} color="#fff" />
        </div>
        <SideDrawer open={drawerOpen}>
          <Nav className="flex-column" onSelect={onDrawerSelect}>
            <Nav.Link href="#aboutme" onClick={this.handleOpenDrawer}>
              <MaterialIcon icon="face" size={20} />
              <span className={styles.navitem}>
                About me
              </span>
            </Nav.Link>
            <Nav.Link href="#professional">
              <MaterialIcon icon="work" size={20} />
              <span className={styles.navitem}>
                Professional projects
              </span>
            </Nav.Link>
            <Nav.Link href="#side">
              <MaterialIcon icon="games" size={20} />
              <span className={styles.navitem}>
                Side projects
              </span>
            </Nav.Link>
            <Nav.Link href="#presentation">
              <MaterialIcon icon="record_voice_over" size={20} />
              <span className={styles.navitem}>
                Presentations
              </span>
            </Nav.Link>
            <Nav.Link href="Emmanuel_Argollo_CV.pdf" target="_blank">
              <MaterialIcon icon="attach_file" size={20} />
              <span className={styles.navitem}>
                Résumé
              </span>
            </Nav.Link>
            <Nav.Link href="#contactme">
              <MaterialIcon icon="question_answer" size={20} />
              <span className={styles.navitem}>
                Contact Me
              </span>
            </Nav.Link>
          </Nav>
        </SideDrawer>
      </div>
    );

    const presentationContent = presentationData.map(presentation => (
      <PresentationItem
        title={presentation.title}
        date={presentation.date}
        key={presentation.date}
      />
    ));

    const sideContent = sideProjects.map(project => (
      <ProjectItem projectData={project} />
    ));

    const professioalContent = professionalProjects.map(project => (
      <ProjectItem projectData={project} />
    ));

    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand>
            <Link to="/">
              <span className={styles.title}>
                {'Laiza Camurugy'}
              </span>
            </Link>
          </Navbar.Brand>
          {!isMobile ? navLinks : null}
        </Navbar>
        <div style={{ paddingTop: '56px' }} />
        <Element name="#aboutme" className="element">
          <Section
            title="About Me"
            theme={styles.aboutme}
          >
            {aboutMe1}
            <br />
            <br />
            {aboutMe2}
            <br />
            <br />
            {aboutMe3}
          </Section>
        </Element>
        <Element name="#professional" className="element">
          <Section
            title="Professional projects"
            theme={styles.section}
          />
        </Element>
        <div style={{ margin: '50px 0px' }}>
          <Container>
            <Row>
              {professioalContent}
            </Row>
          </Container>
        </div>
        <Element name="#side" className="element">
          <Section
            title="Side projects"
            theme={styles.section}
          />
        </Element>
        <div style={{ margin: '50px 0px' }}>
          <Container>
            <Row>
              {sideContent}
            </Row>
          </Container>
        </div>
        <Element name="#presentation" className="element">
          <Section
            title="Presentations"
            theme={styles.section}
          />
        </Element>
        <div style={{ margin: '50px 0px' }}>
          {presentationContent}
        </div>
        <Element name="#contactme" className="element">
          <Section
            title="Contact Me"
            theme={styles.contactme}
          >
            {'Feel free to send me a message here: '}
            <a href="mailto:laiza.camurugy@gmail.com">
              laiza.camurugy@gmail.com
            </a>
            {', I\'ll try to respond as quick as I can! I\'m also on this social media thing, if you need me there:'}
            <br />
            <br />
            <Row style={{ justifyContent: 'center' }}>
              <a href="https://twitter.com/lcamurugy" target="_blank" rel="noopener noreferrer">
                <img src="twitter.svg" alt="twitter" style={{ width: '50px', margin: '0px 10px' }} />
              </a>
              <a href="https://www.linkedin.com/in/laiza-camurugy/" target="_blank" rel="noopener noreferrer">
                <img src="linkedin.svg" alt="linkedin" style={{ width: '50px', margin: '0px 10px' }} />
              </a>
              <a href="https://github.com/fayalita" target="_blank" rel="noopener noreferrer">
                <img src="github.svg" alt="github" style={{ width: '50px', margin: '0px 10px' }} />
              </a>
              <a href="https://steamcommunity.com/id/fayalita/" target="_blank" rel="noopener noreferrer">
                <img src="steam.svg" alt="steam" style={{ width: '50px', margin: '0px 10px' }} />
              </a>
            </Row>
          </Section>
        </Element>
        <div style={{ height: '50px' }} />
        <Section
          theme={styles.footer}
        >
          <div style={{ justifyContent: 'center', textAlign: 'center' }}>
            Layout by
            <a href="https://www.linkedin.com/in/emmanuel-argollo/" style={{ color: '#fff' }}>
              {' Emmanuel Argollo'}
            </a>
          </div>
        </Section>
      </div>
    );
  }
}

export default Home;
