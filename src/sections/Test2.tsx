import Galaxy from '../components/ui/GalaxyBG'

const Test2 = () => {
    return (
        <section className="relative h-screen overflow-hidden bg-[#030712]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-1">
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
            <Galaxy
                mouseRepulsion
                mouseInteraction={false}
                density={1}
                glowIntensity={0.2}
                saturation={.5}
                hueShift={140}
                twinkleIntensity={0.3}
                rotationSpeed={0.1}
                repulsionStrength={2}
                autoCenterRepulsion={2}
                starSpeed={0.3}
                speed={1}
                className="absolute inset-0 z-0"
            />
        </section>
    )
}

export default Test2
