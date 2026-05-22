const Hero = () => {
    return (
        <div className="hero h-[calc(100vh-64px)] bg-gray-900 text-white p-8 rounded-lg flex items-center justify-center flex-col gap-4">
            {/* <img src={ship} alt="Rick and Morty Ship" className="w-32 h-32 mb-4 cursor-inherit" /> */}
            {/* <div className="relative w-32 h-32 mb-4">
                <img src="/src/assets/logo.svg" alt="Rick and Morty Ship" className="w-100 h-100 mb-4" />
                <img src="/src/assets/portal.png" alt="Rick and Morty Ship" className="animate-spin [animation-duration:6s] w-32 h-32 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <img src="/src/assets/ship.svg" alt="Rick and Morty Ship" className="w-32 h-32 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div> */}


            <div className="w-full h-full border flex flex-col justify-center items-center">
                <img src="/src/assets/logo.svg" alt="Rick and Morty Ship" className="w-150 h-auto border" />
                <img src="/src/assets/portal.png" alt="Rick and Morty Ship" className="w-50 h-50 border" />
                <img src="/src/assets/ship.svg" alt="Rick and Morty Ship" className="w-50 h-50 border" />
            </div>
            {/* <img src="/src/assets/logo.svg" alt="Rick and Morty Ship" className="w-100 h-100 mb-4" />
            <img src="/src/assets/ship.svg" alt="Rick and Morty Ship" className="w-100 h-100 mb-4" />
            <img src="/src/assets/portal.png" alt="Rick and Morty Ship" className="w-100 h-100 mb-4" /> */}
        </div>
    )
}

export default Hero
