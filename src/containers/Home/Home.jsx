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

const projectData = {
  title: 'Project A (Unity)',
  desc: 'This is a mock description',
  bulletPoints: [
    'Test point',
    'Test point',
    'Test point',
    'Test point',
  ],
  images: [
    'guardioes.gif',
    'test.jpg',
    'test.jpg',
  ],
  icon: 'steam.svg',
  url: 'https://store.steampowered.com/app/907760/Arida_Backlands_Awakening',
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const aboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec ullamcorper magna. Etiam luctus ultrices massa, id pretium mi fringilla eget. Duis volutpat turpis vel quam blandit blandit. Vestibulum placerat, ante nec dapibus vestibulum, neque lorem tristique mi, et consectetur ex leo vitae elit. Mauris sagittis ornare mauris sit amet ornare. Cras viverra cursus sodales. Sed condimentum rutrum erat, quis cursus sapien maximus sit amet. Nullam pharetra mattis fermentum. Sed tincidunt nec arcu at mollis. Fusce sed gravida lectus, vitae pellentesque enim. Integer quis augue sed ex accumsan porta sit amet vitae justo. Duis purus quam, malesuada sit amet vulputate sed, bibendum pretium lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

    const navLinks = (
      <Navbar.Collapse id="responsive-navbar-nav" style={{ marginTop: '8px' }}>
        <Nav className="mr-auto" onSelect={onSelect}>
          <Nav.Link href="#aboutme">
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
      </Navbar.Collapse>
    );
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand>
            <Link to="/">
              <span className={styles.title}>
                {'Fay\'s portfolio'}
              </span>
            </Link>
          </Navbar.Brand>
          {!isMobile ? navLinks : null}
        </Navbar>
        <div style={{ paddingTop: '56px' }} />
        <Element name="#aboutme" className="element">
          <Section
            title="About Me"
            text={aboutMe}
            theme={styles.aboutme}
          />
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
              <ProjectItem projectData={projectData} />
              <ProjectItem projectData={projectData} />
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
              <ProjectItem projectData={projectData} />
              <ProjectItem projectData={projectData} />
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
          <Container>
            <Row style={{ fontSize: '28px', color: '#fff', display: 'block' }}>
              <span style={{ disply: 'flex' }}>Workshop: Game Programming with Unity</span>
              <span style={{ disply: 'flex', float: 'right' }}>October 31st, 2018</span>
            </Row>
            <Row style={{ fontSize: '28px', color: '#fff', display: 'block' }}>
              <span style={{ disply: 'flex' }}>Female representation in games and in the industry</span>
              <span style={{ disply: 'flex', float: 'right' }}>March 8th, 2018</span>
            </Row>
            <Row style={{ fontSize: '28px', color: '#fff', display: 'block' }}>
              <span style={{ disply: 'flex' }}>Women in Games</span>
              <span style={{ disply: 'flex', float: 'right' }}>July 30th, 2015</span>
            </Row>
          </Container>
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
          </Section>
        </Element>
        <div style={{ height: '50px' }} />
        <Section
          text="This will be the footer"
          theme={styles.footer}
        />
      </div>
    );
  }
}

export default Home;
