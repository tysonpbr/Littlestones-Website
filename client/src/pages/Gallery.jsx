import React from 'react'

import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13} from '../assets/';
import { Card } from '../components';

const Gallery = () => {
  return (
    <div  className="w-full pt-topsm md:pt-topmd lg:pt-top">
      <div className='w-full px-6 md:px-12 lg:px-48 pb-8'>
        <div className='py-8 w-full flex'>
          <span className='w-full text-center text-2xl md:text-3xl lg:text-4xl font-bold md:font-bold tracking-widest text-Black'>Check Out Some Of Our Past Projects!</span>
        </div>
        <div className='flex flex-row justify-center flex-wrap gap-4'>
          <Card description="Image1" photo={img1} />
          <Card description="Image2" photo={img2} />
          <Card description="Image3" photo={img3} />
          <Card description="Image4" photo={img4} />
          <Card description="Image5" photo={img5} />
          <Card description="Image6" photo={img6} />
          <Card description="Image7" photo={img7} />
          <Card description="Image8" photo={img8} />
          <Card description="Image9" photo={img9} />
          <Card description="Image10" photo={img10} />
          <Card description="Image11" photo={img11} />
          <Card description="Image12" photo={img12} />
          <Card description="Image13" photo={img13} />
        </div>
      </div>
    </div>
  )
}

export default Gallery