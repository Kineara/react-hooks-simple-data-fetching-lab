// create your App component here
import React, { useEffect, useState } from 'react';

function App () {
    const [doggoImg, setDoggoImg] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => setDoggoImg(data.message));
    }, [])

    return doggoImg ? <img src={doggoImg} alt="A Random Dog" /> : <p>Loading...</p>
}

export default App;