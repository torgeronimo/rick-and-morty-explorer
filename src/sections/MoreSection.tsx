import logo from '../assets/logo.svg';
import shadowrick from '../assets/shadowrick.png';

const MoreSection = () => {
    return (
        <section className="section-wrapper h-screen w-full flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-bold text-center">More coming soon!</h1>
            <img src={logo} alt="Rick and Morty Logo" className='w-250 object-fit' />
            <img src={shadowrick} alt="Rick and Morty Logo" className='h-auto w-70 object-fit'/>
        </section>
    )
}

export default MoreSection
