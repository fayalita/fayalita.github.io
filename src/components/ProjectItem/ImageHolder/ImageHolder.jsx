import React from 'react';
import { Container, Col, Carousel } from 'react-bootstrap';

import styles from './ImageHolder.module.css';

type Props = {
  images: Array,
  icon: String,
  url: String,
}

const ImageHolder = (props: Props) => {
  const { images, icon, url } = props;

  const carouselItens = images.map(image => (
    <Carousel.Item key={image}>
      <div className={styles.thumbHolder} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }} />
    </Carousel.Item>
  ));

  return (
    <Container>
      <Col>
        <Carousel>
          {carouselItens}
        </Carousel>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={url} className={styles.downloadIcon} />
        </a>
      </Col>
    </Container>
  );
};

export default ImageHolder;
