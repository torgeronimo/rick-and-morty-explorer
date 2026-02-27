import { Link } from 'react-router-dom'
import '../styles/404.scss'

const NotFound = () => {
    return (
        // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        //     <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        //     <p className="text-xl text-gray-300 mb-6">Page Not Found</p>
        //     <Link to="/" className="text-blue-500 hover:underline">
        //         Go back home
        //     </Link>
        // </div>
        <>
        <div className="background-img">
		<div className="space"></div>

            {/* Sub for Hero Page
            <div className="relative flex flex-col items-center justify-center min-h-screen border">
                <img src="/src/assets/portal.png" alt="Rick and Morty Ship" className="animate-spin [animation-duration:6s] w-100 h-100 mb-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <img src="/src/assets/ship.svg" alt="Rick and Morty Ship" className="w-100 h-100 mb-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />

            </div> */}

            {/* This is the working 404 */}
			<div className="wrapper">
				<div className="img-wrapper">
					<span>44</span>
				</div>
				<p>The page you are trying to search has been <br/> moved to another universe.</p>
				<Link to="/" className="text-blue-500 hover:underline">Go back home</Link>
			</div>
		</div>
        </>
        
    )
}

export default NotFound
