import Image from 'next/image'
import React from 'react'
import gradbox1 from '../public/images/gradbox1.png'
import hotkeystitle from '../public/images/hotkeystitle.png'
import blehground from '../public/images/blehground.png'
import { AvgHeader } from './AvgHeader'

const Titlehead = () => {
  return (
    <div>
          <Image src={blehground} alt={'ok'} fill />
          <div className="relative h-[200px] w-[600px] align-middle m-96">
            <Image  src={hotkeystitle} alt={'ok'} fill  />
            <AvgHeader></AvgHeader>
              <Image  className='m-72 mt-0' src={gradbox1} alt="ok"></Image>
              <Image  className='m-72 mt-0' src={gradbox1} alt="ok"></Image>

            
            
          </div>
    </div>
  )
}

export default Titlehead
//why do i have to do it for imports