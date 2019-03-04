import React from 'react';
import { Row } from 'react-bootstrap';
import MaterialIcon from 'material-icons-react';

type Props = {
  content: String,
};

const BulletItem = (props: Props) => {
  const { content } = props;

  return (
    <Row style={{ margin: '10px 0px' }}>
      <MaterialIcon icon="done" color="#fff" size={28} />
      <span style={{ color: '#fff', fontSize: '20px', marginLeft: '5px' }}>
        {content}
      </span>
    </Row>
  );
};

export default BulletItem;
