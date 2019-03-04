import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import ImageHolder from './ImageHolder/ImageHolder';
import BulletItem from './BulletItem/BulletItem';

import styles from './ProjectItem.module.css';

type Props = {
  projectData: Object,
}

const ProjectItem = (props: Props) => {
  const { projectData } = props;

  const {
    title,
    details,
    desc,
    images,
    bulletPoints,
    icon,
    url,
  } = projectData;

  // const title = 'Árida: Backlands Awakening (C#, Unity)';
  // const desc = 'An adventure game focused on story with
  // elements of exploration and survival, developed for PC.';

  const bulletComponents = bulletPoints.map(bullet => (
    <BulletItem content={bullet} key={bullet} />
  ));

  const imageContainer = (
    <Row>
      <ImageHolder images={images} icon={icon} url={url} />
    </Row>
  );

  return (
    <Col xs={12} md={6} style={{ margin: '25px 0px', fontSize: '18px' }}>
      {images.length > 0 ? imageContainer : null}
      <Container>
        <Row className={styles.title}>
          {title}
        </Row>
        <Row className={styles.details}>
          {details}
        </Row>
      </Container>
      <br />
      <Container style={{ color: '#fff' }}>
        {desc}
      </Container>
      <Container>
        <Container>
          {bulletComponents}
        </Container>
      </Container>
    </Col>
  );
};

export default ProjectItem;
