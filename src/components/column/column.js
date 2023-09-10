import React from 'react'
import { useSelector } from 'react-redux';
import styles from './column.module.scss'
import Card from '../card/card';

const Column = ({ data }) => {
 const _data = useSelector(state => state.DATA.DATA?.[data])
 console.log(_data);
 return (
  <div>
   <h1 className={styles.Heading}>{data}</h1>
   {_data?.map((item, index) => {
    return (
     <div key={index}>
      <Card text={item} />
     </div>
    )
   })}
  </div>
 )
}

export default Column