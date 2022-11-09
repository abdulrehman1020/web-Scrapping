import React, { useState } from 'react'
import axios from 'axios'
import './scrapper.css'

const Scrapper = () => {
   const data = axios.get('http://localhost:4000/api/v1/scrapper')

   const [display, setDisplay] = useState()

   const scrdata = [];

   data.then(res => {
    console.log(res.data)
    scrdata.push(res.data)
    if(res.data.includes("raised" && "hike" && "surprise" && "positive")){
      console.log('success')
      setDisplay(true)
   }else{
    console.log("fail")
    setDisplay(false)
   }
   }).catch(err => console.log(err))

   console.log(scrdata)

  //  if(scrdata.includes("Read More", 0)){
  //     console.log('some releif')
  //  }else{
  //   console.log("fuck")
  //  }


  return (
    <div className='main'>
    <h1 className='text-center mt-5'>FOREX PREDICTION</h1>
    <h4 className='text-center mt-5'>The foreign exchange market is a global decentralized or over-the-counter market for the trading of currencies. </h4>
    <div class="center">
      {display === true ? <p className='display-1'>UP</p> : <p className='display-3'>DOWN</p>}
    </div>
    </div>
) 
}

export default Scrapper