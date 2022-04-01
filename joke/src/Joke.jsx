import React, {useState, useEffect} from "react";
import "./Joke.css";
import * as SVGLoaders from 'svg-loaders-react';

function Joke(){

    const [status, setStatus] = useState(false);
    let data;
    let url = `https://api.chucknorris.io/jokes/random`;
    const [joke, setJoke] = useState("");
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {

        async function getJoke(){
            setLoading(true);
            try {
            let response = await fetch(url);
            data = await response.json();
            console.log(data);
            setJoke(`${data.value}`);
            setLoading(false);

            } catch(err){
                console.log(err);
            }
        }
        getJoke();
    },[click])

    function submitted(e){
        setStatus(true);
        setClick(!click);
        e.preventDefault();  
    }

    return(<div>
        <form onSubmit={submitted}>
            <label>Press for a random joke</label><br/>
            <button>Joke</button>
        </form>

        { status &&
            (loading ? <SVGLoaders.Puff className="joke"/> : <p className="joke">{joke}</p>)
        }
    
    </div>);
}

export default Joke;