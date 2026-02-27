import CharacterList from '../components/CharacterList';

const Characters = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-6'>
            <h1 className="text-2xl font-bold mb-4">Characters</h1>
            <CharacterList />
        </div>
    );
};

export default Characters;
