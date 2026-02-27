import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Characters', to: '/characters' },
    { label: 'Episodes', to: '/episodes' },
    { label: 'Locations', to: '/locations' },
]

const NavBar = () => {
    const [query, setQuery] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    const handleSearch = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query.trim())}`)
        setQuery('')
        }
    }

    return (
        <nav className="bg-gray-900 border-b border-green-500/30 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

                {/* Logo */}
                <NavLink to="/" className="shrink-0">
                <img src={logo} alt="Rick and Morty" className="h-10 w-auto" />
                </NavLink>

                {/* Desktop nav links */}
                <ul className="hidden md:flex items-center gap-1">
                {navLinks.map(({ label, to }) => (
                    <li key={to}>
                    <NavLink
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            isActive
                            ? 'text-green-400 bg-green-400/10'
                            : 'text-gray-300 hover:text-green-400 hover:bg-green-400/10'
                        }`
                        }
                    >
                        {label}
                    </NavLink>
                    </li>
                ))}
                </ul>

                {/* Search bar */}
                <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-md px-3 py-1.5 text-sm w-48 focus:outline-none focus:border-green-500 transition-colors"
                />
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-3 py-1.5 rounded-md transition-colors"
                >
                    Search
                </button>
                </form>

                {/* Mobile menu button */}
                <button
                onClick={() => setMenuOpen((o) => !o)}
                className="md:hidden text-gray-300 hover:text-green-400 p-2 rounded-md transition-colors"
                aria-label="Toggle menu"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
                {navLinks.map(({ label, to }) => (
                    <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                        `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                            ? 'text-green-400 bg-green-400/10'
                            : 'text-gray-300 hover:text-green-400 hover:bg-green-400/10'
                        }`
                    }
                    >
                    {label}
                    </NavLink>
                ))}
                <form onSubmit={handleSearch} className="flex gap-2 mt-1">
                    <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-green-500 transition-colors"
                    />
                    <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-400 text-gray-900 font-semibold text-sm px-3 py-1.5 rounded-md transition-colors"
                    >
                    Search
                    </button>
                </form>
                </div>
            )}
        </nav>
    )
}

export default NavBar
