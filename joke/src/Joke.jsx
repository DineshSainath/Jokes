import React, {useState, useEffect} from "react";
import "./Joke.css";
import * as SVGLoaders from 'svg-loaders-react';

function Joke(){

    let data;
    let url = `https://v2.jokeapi.dev/joke/Any`;
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
            setJoke(`${data.setup} ${data.delivery}`);
            setLoading(false);

            } catch(err){
                console.log(err);
            }
        }
        getJoke();
    },[click])


    function submitted(e){
        setClick(!click);
        e.preventDefault();
    }

    return(<div>
        <form onSubmit={submitted}>
            <label>Press for a random joke</label><br/>
            <button>Joke</button>
        </form>

        {loading ? <SVGLoaders.Puff/> : <p className="joke">{joke}</p> }

        
    
    </div>);
}

export default Joke;