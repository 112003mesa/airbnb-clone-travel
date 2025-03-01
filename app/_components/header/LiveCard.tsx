import { LiveItem } from '@/app/types/app'
import Image from 'next/image';
type LiveCartProps = LiveItem;
const LiveCard = ({title, img}: LiveCartProps) => {
return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative size-80'>
            <Image src={img} alt="liveCard-Img" fill />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
)
}

export default LiveCard
