import { LiveData } from '@/app/types/app'
import { getLive } from '@/app/utils/api'
import React from 'react'
import LiveCard from './LiveCard'

const Live = async () => {
    const liveData: LiveData = await getLive()
  return (
    <div className='pt-6'>
        <div className='container'>
            <div className='flex overflow-scroll no-scrollbar p-3 gap-[8px]'>
                {liveData.map((item)=> (
                    <LiveCard img={item.img} title={item.title} key={item.img} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Live
