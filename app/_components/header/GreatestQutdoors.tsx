import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
type GreatestQutdoorsProps = {
    img: string;
    title: string;
    description: string;
    linkText: string;
}
const GreatestQutdoors = ({img, title, description, linkText}: GreatestQutdoorsProps) => {
  return (
    <div className='container relative'>
        <div className='relative h-96 min-w-[300px]'>
            <Image 
            src={img} 
            alt="GreatestQutdoors-Img"
            fill
            className="rounded-2xl -z-10 object-cover"
            />
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <Link href="/"
            className='text-sm block w-fit px-4 py-2 rounded-lg mt-5 text-white bg-gray-900'
            >
            {linkText}
            </Link>
        </div>    
    </div>
  )
}

export default GreatestQutdoors
