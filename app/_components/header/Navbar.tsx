import { AiOutlineGlobal } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";


const Navbar = () => {
return (
    <div className="hidden md:flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <AiOutlineGlobal className="h-6 text-[20px]"/>
        <div className="flex space-x-2 border-2 p-2 rounded-full">
        <IoMenuSharp className="h-6 text-[20px]"/>
        <FaUserCircle className="h-6 text-[20px]"/>
        </div>
    </div>
)
}

export default Navbar
