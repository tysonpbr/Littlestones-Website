import React from 'react'

import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6 } from '../assets/';
import { Card } from '../components';

const Gallery = () => {
  return (
    <div  className="pt-topsm md:pt-topmd lg:pt-top">
      <div className='px-8 md:px-16 lg:px-64 pb-4 lg:pb-8'>
        <div className='py-8'>
          <span className='text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black'>Gallery</span>
        </div>
        <div className='flex flex-row flex-wrap gap-8 md:gap-16 lg:gap-4'>
          <Card description="Image 1" photo={gallery1} />
          <Card description="Image 2" photo={gallery2} />
          <Card description="Image 3" photo={gallery3} />
          <Card description="Image 4" photo={gallery4} />
          <Card description="Image 5" photo={gallery5} />
          <Card description="Image 6" photo={gallery6} />
          <Card description="Image 4" photo={gallery4} />
          <Card description="Image 2" photo={gallery2} />
          <Card description="Image 3" photo={gallery3} />
          <Card description="Image 4" photo={gallery4} />
          <Card description="Image 2" photo={gallery2} />
          <Card description="Image 3" photo={gallery3} />
          <Card description="Image 5" photo={gallery5} />
          <Card description="Image 6" photo={gallery6} />
          <Card description="Image 1" photo={gallery1} />
          <Card description="Image 2" photo={gallery2} />
          <Card description="Image 3" photo={gallery3} />
          <Card description="Image 4" photo={gallery4} />
          <Card description="Image 5" photo={gallery5} />
          <Card description="Image 6" photo={gallery6} />
        </div>
      </div>
    </div>
  )
}

export default Gallery