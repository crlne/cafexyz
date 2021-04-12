import { Button } from '@chakra-ui/react'
import React, { useState } from "react"
import styles from './button.module.css'

export default function Quantity() {
  const [num, setNum] = useState(0);

    const increNum = () => {
        setNum(num + 1);
    };

    const decreNum = () => {
        if(num > 0) {
        setNum(num - 1);
        } else {
        setNum(0);
       }
    };
      
     return (
      <> 
        <Button onClick={increNum} className={styles.increment} >+</Button>
        <h1 className={styles.h1}>{num}</h1>
        <Button onClick={decreNum} className={styles.Button}>-</Button>
      </>

    )
}