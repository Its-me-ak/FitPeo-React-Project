import { createContext, useState } from "react";

const DashboardContext = createContext()

const DashboardProvider = ({children}) => {
    const [mobileMenu, setMobileMenu] = useState(false)

    const MobileMenuHide = () => {
        setMobileMenu(false)
    }

    const MobileMenuShow = () => {
        setMobileMenu(true)
    }

    return (
        <DashboardContext.Provider value={{
            mobileMenu,
            setMobileMenu,
            MobileMenuHide,
            MobileMenuShow
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

export {DashboardContext, DashboardProvider}