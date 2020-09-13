import React from 'react'
import styles from './styles.module.css';
import DataTable from './DataTable';


export default () => <DataTable />

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example 5 : {text}</div>
}

