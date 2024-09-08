// CloseButton.jsx
import React from 'react'

import classes from './index.module.scss'

const CloseButton = ({ onClick }) => (
  <button className={classes.closeButton} onClick={onClick}>
    <span className={classes.closeIcon}>&times;</span>
  </button>
)

export default CloseButton
