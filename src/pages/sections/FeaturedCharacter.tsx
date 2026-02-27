import React from 'react'

const FeaturedCharacter = () => {
    return (
        <div className='max-w-7xl h-screen mx-auto px-4 py-6 flex items-center justify-center flex-col gap-4'>
            <h1 className="text-2xl font-bold mb-4">Featured Character</h1>
            <img src="/src/assets/shadowrick.png" alt="Rick Sanchez" className="w-100 h-100 rounded-full mb-4" />
        </div>
    )
}

export default FeaturedCharacter
