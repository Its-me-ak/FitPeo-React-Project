import { VscTriangleUp } from "react-icons/vsc";


const NetProfit = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#1f2029] rounded-md py-2 px-3">
        <div>
          <span className="text-sm capitalize text-gray-300 font-semibold mb-3 inline-block">net profit</span>
          <h2 className="text-4xl font-bold text-gray-200 my-4">$6759.25</h2>
          <span className="flex items-center gap-1 text-green-500 font-semibold"><VscTriangleUp /> 3%</span>
        </div>
        <div className="relative size-32">
          <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            {/* Background Circle */}
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#2a3266]" strokeWidth="4"></circle>
            {/* Progress Circle */}
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#7493f8]" strokeWidth="4" strokeDasharray="100" strokeDashoffset="30" strokeLinecap="round"></circle>
          </svg>

          {/*Percentage Text*/}
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-2xl font-bold text-gray-300">70%</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NetProfit
