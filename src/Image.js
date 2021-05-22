import React, {useEffect, useState} from 'react';
import './Image.css';
import axios from 'axios';

function Image(){
    const [url, setUrl] = useState('https://random.dog/e00b0661-9c04-463c-8f88-612613dd0ea0.jpeg');

    // const [done, setDone] = useState([]);
        const getDog = () => {
            fetch('https://random.dog/woof.json')
                .then(response => response.json())
                .then(data => {
                    setUrl(data.url);
                    console.log(url);
                    if(data.url.includes('.mp4')){
                        getDog();
                    }
                })
        }
        
        // useEffect(()=>{     
        //     fetch('https://random.dog/woof.json')
        //         .then(res => {
        //             console.log(res.json())
        //             res.json()
        //         })
        //         .then(data => {
        //             console.log(data.url);

        //         })
                    
                
        // },[url])

        useEffect(()=>{
            getDog();
        }, [])

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