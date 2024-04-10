import React, { useState } from 'react'

export default function Create() {

    const [count,setCount]=useState(0)
    const inc = ()=>{
        setCount(count+1)
    }
    const dec = ()=>{
        setCount(count-1)
    }
  return (
    <>
    
    <button onClick={inc}>
        plus
    </button>
    {count}
    <button onClick={dec}>
        moins
    </button>
    </>
  )
}
