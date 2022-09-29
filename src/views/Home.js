import { useState} from 'react';

const Home = ({handleSubmit, data}) => {
    const [input, setInput] = useState('');

    console.log('Desde Home:',data);

    return ( 
        <main>
            <h1 className="text-3xl p-4">General Information</h1>
            <form 
                onSubmit={e => {
                e.preventDefault();
                handleSubmit(input)}} 
                className="p-2 flex justify-evenly items-center"
                >
                <label 
                className="text-xl"
                htmlFor="search"
                >Search a Company (Ticker)
                </label>
                <input
                className="p-2 rounded-md w-1/2" 
                type="text" 
                name="search"
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                />
            </form>
        </main>
     );
}
 
export default Home;