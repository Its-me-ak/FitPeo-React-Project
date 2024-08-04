import './App.css'
import { DashboardProvider } from './hooks/DashboardContext'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
     <DashboardProvider>
        <HomePage />
     </DashboardProvider>
    </>
  )
}

export default App
