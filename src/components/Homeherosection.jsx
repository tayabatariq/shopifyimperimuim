import React from 'react'
import Herocarousel from './Herocarousel'
import Homesection2nd from './Homesection2nd'
import Coursessliders from './Coursessliders'

const Homeherosection = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col '>
        <Herocarousel/>
        <Coursessliders/>
    <Homesection2nd/>
    </div>
    </>
  )
}

export default Homeherosection