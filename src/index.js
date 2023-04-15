import React from 'react'
import styles from './styles.module.css'

export const Button = ({text,type}) => {
  console.log(type);
  return <button className={styles[type]}>{text}</button>
}
