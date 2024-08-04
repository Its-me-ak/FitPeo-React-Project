import Activity from "./Activity"
import GoalCard from "./GoalCard"
import NetProfit from "./NetProfit"
import RecentOrders from "./RecentOrders"
import Testomonials from "./Testomonials"
import TopCardStatus from "./TopCardStatus"

const MainContainer = () => {
  return (
    <>
      <h1 className="text-xl font-bold text-gray-200 mt-4">Dashboard</h1>
      <div className="w-full grid grid-cols-[1fr] lg:grid-cols-[2fr_1fr] gap-4 py-5">
        <TopCardStatus />
        <NetProfit />
      </div>
      <div className="w-full grid grid-cols-[1fr] lg:grid-cols-[2fr_1fr] gap-4 py-5">
        <Activity/>
        <GoalCard/>
      </div>

      <div className="w-full grid grid-cols-[1fr] lg:grid-cols-[2fr_1fr] gap-4 py-5">
        <RecentOrders/>
        <Testomonials/>
      </div>


    </>
  )
}

export default MainContainer
