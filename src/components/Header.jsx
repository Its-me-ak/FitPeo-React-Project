import { FaSearch } from "react-icons/fa";
import UserProfile from "./UserProfile";
import { SlMenu } from "react-icons/sl";
import { useContext } from "react";
import { DashboardContext } from "../hooks/DashboardContext";

const Header = () => {
    const {MobileMenuShow} = useContext(DashboardContext)

    return (
        <div className="flex justify-between w-full items-center h-16 bg-[#1f2029] ps-1 pe-1 sm:ps-6 sm:pe-8 fixed top-0 shadow-lg z-20">
            <div className="flex items-center gap-1">
                <div className="flex md:hidden md:mr-6 cursor-pointer justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] mt-5" onClick={MobileMenuShow} >
                    <SlMenu className='text-white text-xl' />
                </div>
                <div className="relative left-0 md:left-[70px]">
                    <div className="absolute inset-y-0 flex items-center pl-3">
                        <FaSearch className="h-4 w-4 text-gray-200" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="border-none px-2 py-1.5 rounded-md w-full outline-none text-gray-200 bg-[#292b2f] pl-9 text-sm"
                    />
                </div>
            </div>
            <UserProfile/>
        </div>
    )
}

export default Header
