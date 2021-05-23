import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './Image.css';

function Image(){
    const [url, setUrl] = useState('https://random.dog/e00b0661-9c04-463c-8f88-612613dd0ea0.jpeg');
    const [isLoading, setIsLoading] = useState(true) //This sets the state of the image loader to load when it is actually loading.

    // const [done, setDone] = useState([]);
        const getDog = async () => {
            const choice = await axios.get('https://random.dog/woof.json')
                console.log(choice);
                console.log("I think this is working now.");
                setUrl(choice.data.url);
                setIsLoading(false);
                if (choice.data.url.includes('.mp4')){
                    getDog();
                }
            
        }    
        // fetch('https://random.dog/woof.json')
        //         .then(response => response.json())
        //         .then(data => {
        //             setUrl(data.url);
        //             console.log(url);
        //             if(data.url.includes('.mp4')){
        //                 getDog();
        //             }
        //         })
        // }

        useEffect(()=>{
            getDog()
        }, [])
// Bro Abbey's await and axios method
        // useEffect(() => {
        //     const fetchItems = async () => {
        //       const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        
        //       console.log(result.data)
        //       setItems(result.data);
        //       setIsLoading(false);
        
        //     }
        //     fetchItems()
        //   }, [query]);
// Final commit By Bro Abbey.

    return (
        <>
            <div className = "dog-image-container">
                <img src = {url} alt="doggy" />
            </div>
            <div className = "dog-btn">
                <button onClick={getDog}>Generate Dog</button>
            </div>
        </>
     );
}
 
export default Image;
