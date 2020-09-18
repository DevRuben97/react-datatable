import React from 'react'
import styles from './styles.css'

export { default as DataTable } from './DataTable'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example 5 : {text}</div>
}
