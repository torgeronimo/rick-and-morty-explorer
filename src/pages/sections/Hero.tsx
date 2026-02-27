const Hero = () => {
    return (
        <div className="hero h-[calc(100vh-64px)] bg-gray-900 text-white p-8 rounded-lg text-center flex flex-col items-center gap-6">
            {/* <img src={ship} alt="Rick and Morty Ship" className="w-32 h-32 mb-4 cursor-inherit" /> */}
            <img src="/src/assets/logo.svg" alt="Rick and Morty Ship" className="w-100 h-100 mb-4" />
            <img src="/src/assets/ship.svg" alt="Rick and Morty Ship" className="w-100 h-100 mb-4" />
            <img src="/src/assets/portal.png" alt="Rick and Morty Ship" className="w-100 h-100 mb-4" />
        </div>
    )
}

export default Hero
