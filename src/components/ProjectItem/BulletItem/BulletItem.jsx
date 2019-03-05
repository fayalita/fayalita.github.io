import React from 'react';
import MaterialIcon from 'material-icons-react';
import styles from './BulletItem.module.css';

type Props = {
  content: String,
};

const BulletItem = (props: Props) => {
  const { content } = props;

  return (
    <div style={{ margin: '10px 0px' }}>
      <MaterialIcon icon="play_arrow" color="#fff" size={16} />
      <span className={styles.bulletText}>
        {content}
      </span>
    </div>
  );
};

export default BulletItem;
