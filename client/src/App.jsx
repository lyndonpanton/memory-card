import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={ () => setCount(count + 1) }>
                Increment count
            </button>
            <p>Count: { count }</p>
        </>
    );
}

export default App
