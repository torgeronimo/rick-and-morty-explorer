const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-green-500/30 py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-1 text-sm text-gray-500">
                <p>
                    Powered by the{' '}
                    <a
                        href="https://rickandmortyapi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors"
                    >
                        Rick and Morty API
                    </a>
                </p>
                <p>© {new Date().getFullYear()} Rick and Morty Explorer</p>
            </div>
        </footer>
    )
}

export default Footer
