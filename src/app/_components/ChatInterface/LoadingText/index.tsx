import React from 'react'
import styles from './index.module.scss'
const Loader = () => {
  return (
    <div>
      <div className={`${styles.loading} ${styles.canvas}`}>
        <div className={`${styles.spinner6} ${styles.p1}`} />
        <div className={`${styles.spinner6} ${styles.p2}`} />
        <div className={`${styles.spinner6} ${styles.p3}`} />
        <div className={`${styles.spinner6} ${styles.p4}`} />
      </div>
    </div>
  )
}

export default Loader
