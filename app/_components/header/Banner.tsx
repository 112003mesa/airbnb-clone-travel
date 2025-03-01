import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]'>
      <Image
      src='https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyYm5ifGVufDB8fDB8fHww'
      alt='banner-img'
      fill
      className='object-cover object-left'
      />
      <div 
      className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg mb-2'>Not sure where to go? Perfect.</p>
        <button
        type='button'
        className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold'
        >I am flexible</button>
      </div>
    </div>
  )
}

export default Banner
