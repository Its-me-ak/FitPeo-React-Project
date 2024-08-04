import { MdHome } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { BsFileCheck, BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useRef, useEffect, useContext } from "react";
import { CgClose } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { DashboardContext } from "../hooks/DashboardContext";



const Sidebar = () => {
    const sidebarRef = useRef()
    const { mobileMenu, setMobileMenu, MobileMenuHide } = useContext(DashboardContext)

    useEffect(() => {
        const handleSidebar = (e) => {
            if (!sidebarRef.current) return;

            if (!sidebarRef.current.contains(e.target)) {
                setMobileMenu(false)
            }
        }
        document.addEventListener('click', handleSidebar, true)

        return () => {
            document.removeEventListener('click', handleSidebar)
        }
    }, [setMobileMenu])

    return (
        <div ref={sidebarRef} className={`h-screen w-20 fixed z-30 top-0 flex flex-col justify-between bg-[#1f2029] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : "translate-x-[-240px]"}`}>

            <div>
                <span className="mt-2 flex justify-end me-2 text-white text-xl md:hidden p-1">
                    <CgClose className="cursor-pointer" onClick={MobileMenuHide} />
                </span>
                <div className="pl-4 pt-4">
                    <GrProjects className="text-3xl text-[#7396fe]" />
                </div>
                <ul className="list-none mt-8">
                    <li className="h-10 w-10 flex items-center cursor-pointer pl-4 bg-transparent border-l-2 border-[#7396fe] my-4">
                        <MdHome className="h-8 w-8 text-[#7396fe]" />
                    </li>
                    <li className="h-10 w-10 flex items-center cursor-pointer pl-4 bg-transparent border-l-2 border-transparent hover:border-[#7396fe] transition-all duration-300 my-4">
                        <VscProject className="h-8 w-8 text-gray-300 hover:text-[#7396fe] transition-all duration-300" />
                    </li>
                    <li className="h-10 w-10 flex items-center cursor-pointer pl-4 bg-transparent border-l-2 border-transparent hover:border-[#7396fe] transition-all duration-300 my-4">
                        <BsFileCheck className="h-8 w-8 text-gray-300 hover:text-[#7396fe] transition-all duration-300" />
                    </li>
                    <li className="h-10 w-10 flex items-center cursor-pointer pl-4 bg-transparent border-l-2 border-transparent hover:border-[#7396fe] transition-all duration-300 my-4">
                        <MdAccountBalanceWallet className="h-8 w-8 text-gray-300 hover:text-[#7396fe] transition-all duration-300" />
                    </li>
                    <li className="h-10 w-10 flex items-center cursor-pointer pl-4 bg-transparent border-l-2 border-transparent hover:border-[#7396fe] transition-all duration-300 my-4">
                        <BsFillBagCheckFill className="h-8 w-8 text-gray-300 hover:text-[#7396fe] transition-all duration-300" />
                    </li>
                </ul>
            </div>
            <div className="mb-5">
                <ul className="">
                    <li className="h-10 w-10 flex items-center cursor-pointer pl-4 bg-transparent border-l-2 border-transparent hover:border-[#7396fe] transition-all duration-300 my-4">
                        <FaArrowRightToBracket className="h-8 w-8 text-gray-300 hover:text-[#7396fe] transition-all duration-300" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
