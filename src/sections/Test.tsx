import Particles from '../components/ui/Particles'
const Test = () => {
    return (
        <>
            <div className='w-full h-screen relative'>
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-4xl font-bold text-white tracking-widest uppercase pointer-events-auto">
                    Hello World
                    </h1>
                    
                </div> */}
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-full border flex flex-col justify-center items-center">
                        <img src="/src/assets/logo.svg" alt="Rick and Morty Ship" className="w-150 h-auto border" />
                        <img src="/src/assets/portal.png" alt="Rick and Morty Ship" className="w-50 h-50 border" />
                        <img src="/src/assets/ship.svg" alt="Rick and Morty Ship" className="w-50 h-50 border" />
                    </div>
                </div> */}

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex flex-col justify-center items-center">
                        <img src="/src/assets/logo.svg" alt="Rick and Morty Logo" className="w-150 h-auto mb-8" />
                        <div className="relative w-80 h-80 flex items-center justify-center">
                        <img 
                            src="/src/assets/portal.png" 
                            alt="Rick and Morty Portal" 
                            className="absolute w-full h-full object-contain animate-[spin_3s_linear_infinite]" 
                        />
                        <img 
                            src="/src/assets/ship.svg" 
                            alt="Rick and Morty Ship" 
                            className="absolute w-60 h-60 object-contain z-10 animate-bounce" 
                        />
                        </div>
                    </div>
                </div>
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={300}
                    particleSpread={5}
                    speed={0.1}
                    particleBaseSize={50}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
                
            </div>
        </>
    )
}

export default Test
