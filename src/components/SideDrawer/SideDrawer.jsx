import React from 'react';

import classes from './SideDrawer.module.css';

type Props = {
  open: Boolean,
  children: Array,
}

const sideDrawer = (props: Props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  const { open, children } = props;
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div className={attachedClasses.join(' ')}>
      {children}
    </div>
  );
};

export default sideDrawer;
