import React from 'react'

const Card = ({ description, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card lg:max-h-56 lg:w-auto">
      <img
        className='w-full h-auto object-cover rounded-xl lg:max-h-56 lg:w-auto'
        src={photo}
        alt={description}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-zinc-700 m-2 rounded-md opacity-90'>
        <p className='text-white text-md overflow-y-auto prompt font-sans p-4'>{description}</p>
      </div>
    </div>
  )
}

export default Card