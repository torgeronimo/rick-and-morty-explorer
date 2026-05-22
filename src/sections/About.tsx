const About = () => {
    return (
        <>
            <div className="section-wrapper">
                <div className='content-wrapper max-w-7xl h-screen mx-auto px-4 py-6 flex items-center justify-center flex-col gap-4'>
                    
                    <h1 className="text-2xl font-bold mb-4">About</h1>
                    <p className="text-lg text-center w-3/4">
                        Built for fans of the multiverse, this project uses the <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300">Rick and Morty API</a> to let users explore characters, episodes, and locations from the universe of Rick and Morty. You can quickly search your favorite characters, discover episode details, and browse iconic locations across dimensions — all in one place.<br/><br/>
                        I’ve always loved Rick and Morty, and this project was created as a fun way to combine that passion with web development. Whether you're looking for Evil Morty, the Citadel, or your favorite episode, this app makes exploring the series simple and interactive.
                    </p>
                    
                </div>
            </div>
        </>
    )
}

export default About
