import { FaBasketShopping, FaSackDollar } from "react-icons/fa6";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { TbShoppingBagCheck, TbShoppingBagX } from "react-icons/tb";

const TopCardStatus = () => {
    return (
        <>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-[#1f2029] p-3 rounded-md">
                    <div className="h-12 w-12 bg-[#4261f9]/[0.2] flex justify-center items-center rounded-lg">
                        <FaBasketShopping className="text-3xl text-[#4261f9]" />
                    </div>
                    <h6 className="capitalize text-sm text-gray-100 font-semibold mt-2">total orders</h6>
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-4xl font-bold text-gray-100">75</h2>
                        <span className="flex items-center gap-1 text-green-500 font-semibold"><VscTriangleUp /> 3%</span>
                    </div>
                </div>
                <div className="bg-[#1f2029] p-3 rounded-md">
                    <div className="h-12 w-12 bg-[#00ca8c]/[0.2] flex justify-center items-center rounded-lg">
                        <TbShoppingBagCheck className="text-3xl text-[#00ca8c]" />
                    </div>
                    <h6 className="capitalize text-sm text-gray-100 font-semibold mt-2">total deliverd</h6>
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-4xl font-bold text-gray-100">70</h2>
                        <span className="flex items-center gap-1 text-red-500 font-semibold"><VscTriangleDown /> 3%</span>
                    </div>
                </div>
                <div className="bg-[#1f2029] p-3 rounded-md">
                    <div className="h-12 w-12 bg-[#f45c5b]/[0.2] flex justify-center items-center rounded-lg">
                        <TbShoppingBagX className="text-3xl text-[#f45c5b]" />
                    </div>
                    <h6 className="capitalize text-sm text-gray-100 font-semibold mt-2">total cancelled</h6>
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-4xl font-bold text-gray-100">05</h2>
                        <span className="flex items-center gap-1 text-green-500 font-semibold"><VscTriangleUp /> 3%</span>
                    </div>
                </div>
                <div className="bg-[#1f2029] p-3 rounded-md">
                    <div className="h-12 w-12 bg-[#e4459c]/[0.2] flex justify-center items-center rounded-lg">
                        <FaSackDollar className="text-3xl text-[#e4459c]" />
                    </div>
                    <h6 className="capitalize text-sm text-gray-100 font-semibold mt-2">total revenue</h6>
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-4xl font-bold text-gray-100">$12k</h2>
                        <span className="flex items-center gap-1 text-red-500 font-semibold"><VscTriangleDown /> 3%</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopCardStatus
