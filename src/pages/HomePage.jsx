import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Sidebar from "../components/Sidebar"

const HomePage = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <div className="md:ml-24 ml-4 me-4 mt-20">
        <MainContainer />
      </div>
    </>
  )
}

export default HomePage
