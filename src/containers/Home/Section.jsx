import React from 'react';
import {
  Col,
  Container,
} from 'react-bootstrap';

type Props = {
  title: String,
  text: String,
  theme: Object,
  children: Array,
};

const Section = React.forwardRef((props: Props, ref) => {
  const {
    title,
    text,
    theme,
    children,
  } = props;
  return (
    <div className={theme} ref={ref}>
      <Container>
        <Col md={{ span: 10, offset: 1 }}>
          <div style={{ fontSize: '46px', textAlign: 'center' }}>
            {title}
          </div>
          {text || null}
          {children}
        </Col>
      </Container>
    </div>
  );
});

export default Section;
