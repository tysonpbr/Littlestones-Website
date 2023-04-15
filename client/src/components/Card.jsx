import React, { useState } from 'react'

const Card = ({ description, photo }) => {
  const [selected, setSelected] = useState(false);

  const clicked = (e) => {
    setSelected(!selected)
    setTimeout(() => {
      e.target.scrollIntoView({ 
        behavior: "smooth", 
        block: "center", 
        inline: "nearest" 
      })
    }, 50)
  }

  return (
    <div>
      <div className='hidden md:flex'>
        {!selected ? (
          <div className="rounded-xl relative max-h-56 w-auto" onClick={(e) => clicked(e)}>
            <img
              className='h-auto object-cover rounded-xl md:max-h-36 lg:max-h-56 w-auto hover:lg:border-16 hover:lg:rounded-3xl border-white'
              src={photo}
              alt={description}
            />
          </div>
        ) : (
          <div className="rounded-xl relative w-full h-auto lg:h-zoom lg:w-auto" onClick={(e) => clicked(e)}>
            <img
              className='object-cover rounded-xl w-full h-auto lg:h-zoom lg:w-auto'
              src={photo}
              alt={description}
            />
          </div>
        )}
      </div>
      <div className="flex md:hidden">
        <div className="rounded-xl relative h-auto w-full">
          <img
            className='h-auto w-full object-cover rounded-xl border-white'
            src={photo}
            alt={description}
          />
        </div>
      </div>
    </div>
  )
}

export default Card