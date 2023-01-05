import Image from 'next/image'
import React from 'react'
import gradbox1 from '../public/images/gradbox1.png'
import hotkeystitle from '../public/images/hotkeystitle.png'

const Titlehead = () => {
  return (
    <div>
          <Image src={gradbox1} alt={'ok'} fill />
          <div>
            <Image src={hotkeystitle} alt={'ok'} fill />
          </div>
    </div>
  )
}

export default Titlehead