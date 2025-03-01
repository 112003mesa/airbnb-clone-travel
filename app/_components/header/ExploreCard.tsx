import { ExploreItem } from "@/app/types/app"
import Image from "next/image";

type ExploreCardProps = ExploreItem;

const ExploreCard = ({distance, location, img}: ExploreCardProps) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-16 h-16">
        <Image src={img} alt="ExploreCard" fill />
      </div>
      <div>
        <h2>{location}</h2>
        <span className="text-gray-500">{distance}</span>
      </div>
    </div>
  )
}

export default ExploreCard

