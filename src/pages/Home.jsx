import '../css/Home.css'
import { useState } from "react";
import MovieCard from "../components/MovieCard"

function Home(){
    const [searchQuery, setSearchQuery]=useState('');

    const movies=[
        {id:1,title:'John Wick', release_date:'2020'},
        {id:2,title:'Terminator', release_date:'2020'},
        {id:3,title:'The Matrix', release_date:'1998'},
    ];

    const handleSearch =(e)=>{
        e.preventDefault();
        alert(searchQuery);
    };

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                type="text"
                placeholder="Assadasdad"
                className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Seacrh</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie)=> (
                    <MovieCard movie={movie}/>
                ))}
            </div>
        </div>
    )
}

export default Home