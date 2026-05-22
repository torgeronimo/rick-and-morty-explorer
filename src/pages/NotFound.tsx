import { Link } from 'react-router-dom'
import '../styles/404.scss'

const NotFound = () => {
    return (
        <>
        <div className="background-img">
		<div className="space"></div>
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
