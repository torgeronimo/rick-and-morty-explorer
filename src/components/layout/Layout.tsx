import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-950 flex flex-col">
            <NavBar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
