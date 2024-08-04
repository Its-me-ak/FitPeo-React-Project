import { BiTargetLock, BiDish } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";

const GoalCard = () => {
  return (
      <div className="w-full p-5 bg-[#1f2029] rounded-md">
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <span className="w-14 h-14 bg-orange-500/[0.4] rounded-full flex justify-center items-center">
                    <BiTargetLock className="text-3xl text-orange-500" />
                </span>
                  <h3 className="text-[22px] font-semibold capitalize text-gray-300 ">goals</h3>
            </div>
              <span className="flex justify-center items-center h-10 w-10 bg-[#44464c] rounded-full cursor-pointer">
                <FaAngleRight className="text-lg text-gray-200" />
            </span>
        </div>

          <div className="flex justify-between items-center my-7">
              <div className="flex gap-3 items-center">
                  <span className="w-14 h-14 bg-blue-500/[0.4] rounded-full flex justify-center items-center">
                      <GiHamburger className="text-3xl text-blue-500" />
                  </span>
                  <h3 className="text-[22px] font-semibold capitalize text-gray-300 ">popular dishes</h3>
              </div>
              <span className="flex justify-center items-center h-10 w-10 bg-[#44464c] rounded-full cursor-pointer">
                  <FaAngleRight className="text-lg text-gray-200" />
              </span>
          </div>

          <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                  <span className="w-14 h-14 bg-sky-500/[0.4] rounded-full flex justify-center items-center">
                      <BiDish className="text-3xl text-sky-500" />
                  </span>
                  <h3 className="text-[22px] font-semibold capitalize text-gray-300 ">menus</h3>
              </div>
              <span className="flex justify-center items-center h-10 w-10 bg-[#44464c] rounded-full cursor-pointer">
                  <FaAngleRight className="text-lg text-gray-200" />
              </span>
          </div>
    </div>
  )
}

export default GoalCard
