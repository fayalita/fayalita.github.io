import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

type Props = {
  title: String,
  date: String,
}


// <span style={{ disply: 'flex' }}>{title}</span>
// <span style={{ disply: 'flex', float: 'right' }}>{date}</span>

const PresentationItem = (props: Props) => {
  const { title, date } = props;

  return (
    <Container>
      <Row style={{ fontSize: '28px', color: '#fff' }}>
        <Col xs={8}>
          {title}
        </Col>
        <Col xs={4} style={{ textAlign: 'right' }}>
          {date}
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default PresentationItem;
