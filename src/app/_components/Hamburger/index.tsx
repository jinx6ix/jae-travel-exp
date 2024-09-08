import React from 'react'

import classes from './Hamburger.module.scss'

const Hamburger = ({ isOpen, handleClick }) => (
  <div className={classes.hamburger} onClick={handleClick}>
    <div className={`${classes.line} ${isOpen ? classes.lineOpen : ''}`} />
    <div className={`${classes.line} ${isOpen ? classes.lineOpen : ''}`} />
    <div className={`${classes.line} ${isOpen ? classes.lineOpen : ''}`} />
  </div>
)

export default Hamburger
