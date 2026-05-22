import Particles from '../components/ui/Particles';

const Hero = () => {
    return (
        <>
            <div className='w-full h-screen relative'>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex flex-col justify-center items-center">
                        <img src="../src/assets/logo.svg" alt="Rick and Morty Logo" className="w-150 h-auto mb-8" />
                        <div className="relative w-80 h-80 flex items-center justify-center">
                        <img 
                            src="../src/assets/portal.png" 
                            alt="Rick and Morty Portal" 
                            className="absolute w-full h-full object-contain" 
                            style={{ animation: 'portal-spin 10s linear infinite' }}
                        />
                        <img 
                            src="../src/assets/ship.svg" 
                            alt="Rick and Morty Ship" 
                            className="absolute w-60 h-60 object-contain z-10" 
                            style={{ animation: 'ship-fly 4s ease-in-out infinite' }}
                        />
                        </div>
                    </div>
                    
                    <style>{`
                        @keyframes portal-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                        }
                        @keyframes ship-fly {
                        0% {
                            transform: translateY(0px) rotate(0deg) scale(1);
                        }
                        25% {
                            transform: translateY(-8px) translateX(5px) rotate(2deg) scale(1.02);
                        }
                        50% {
                            transform: translateY(4px) translateX(-3px) rotate(-1deg) scale(0.98);
                        }
                        75% {
                            transform: translateY(-6px) translateX(-5px) rotate(1deg) scale(1.01);
                        }
                        100% {
                            transform: translateY(0px) rotate(0deg) scale(1);
                        }
                        }
                    `}</style>
                </div>
                <Particles
                    particleColors={["#5cad4a"]}
                    particleCount={500}
                    particleSpread={6}
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

export default Hero
