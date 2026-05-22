import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-green-500/30 py-6 mt-auto relative">
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
                <div className="flex gap-4 mt-2">
                    <img src={githubIcon} alt="GitHub Repository" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.open('https://github.com/torgeronimo/rick-and-morty-explorer.git', '_blank')} />
                    <img src={linkedinIcon} alt="LinkedIn Profile" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.open('https://www.linkedin.com/in/vgmdelacruz', '_blank')} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
