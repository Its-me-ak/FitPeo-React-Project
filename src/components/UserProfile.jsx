import { useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center gap-2 sm:gap-5 relative">
            <button onClick={toggleDropdown} className="md:hidden h-8 w-8 bg-[#44464c] rounded-full flex justify-center items-center cursor-pointer">
               <span>
                    <FaAngleDown className='text-gray-200'/>
               </span>
            </button>

            <ul className={`shadow-lg md:flex flex-col md:flex-row gap-2 items-center ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative md:bg-transparent rounded-none mt-10 md:mt-0 right-0 top-3 md:top-0 bg-[#1f2029] w-28 px-2 py-2 md:px-0 md:py-0`}>
                <li className="h-8 w-8 bg-[#44464c] rounded-full flex justify-center items-center cursor-pointer">
                    <FaRegEnvelope className="h-4 w-4 text-gray-200" />
                </li>
                <li className="my-3 md:my-0 h-8 w-8 bg-[#44464c] rounded-full flex justify-center items-center cursor-pointer">
                    <IoSettingsOutline className="h-4 w-4 text-gray-200" />
                </li>
                <li className="h-8 w-8 bg-[#44464c] rounded-full flex justify-center items-center cursor-pointer">
                    <IoNotificationsOutline className="h-4 w-4 text-gray-200" />
                </li>
            </ul>

            <img src="https://st4.depositphotos.com/12982378/30287/i/450/depositphotos_302876834-stock-photo-beautiful-smiling-girl-isolated-pink.jpg" className="h-10 w-10 rounded-full object-cover" alt="" />
        </div>
    );
};

export default UserProfile;
