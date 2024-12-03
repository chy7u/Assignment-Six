import axios from "axios";
import { useEffect, useState } from "react";
import "./Feature.css";

function Feature() {
    const [featured, setFeatured] = useState ([]);

    useEffect(() => {
        (async function getFeatured() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );

            let shuffled = response.data.results
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)

            setFeatured(shuffled);
            
            console.log("API Key:", import.meta.env.VITE_TMDB_KEY);
        }) ();
    }, []);

    return (
        <div className="featured-section">
            <h2>Featured Movies</h2>
            <div>
                {featured.slice(0,3).map((feature) => (
                    <div key={feature.id} className="featured-movie">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${feature.poster_path}`}
                            alt={feature.title}
                        />
                        <div className="movie-info">
                            <h3>{feature.title}</h3>
                            <p>{feature.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Feature;

/*
<div class="featured-section">
    <h2>Featured Movies</h2>
    <div class="featured-movie">
        <img src="images/gundammovieposter.jpg" alt="Featured Movie Poster" />
        <div class="movie-info">
            <h3>Mobile Suit Gundam: Trilogy</h3>
            <p>Universal Century 0079. Amuro Ray finds himself caught up in the war between the Earth Federation and the Principality of Zeon. He unwillingly becomes the pilot of a prototype Mobile Suit called the Gundam. Now he and the crew of the White Base will have to fight for their very lives as the enemy attempts to destroy this new weapon at all costs. Combatants will face triumph and turmoil as they battle their way through space to get to their final destination on Earth.</p>
            <button class="watch-button">Rent Now</button>
        </div>
    </div>
    <div class="featured-movie">
        <img src="images/evangelionmovieposter.jpg" alt="Featured Movie Poster" />
        <div class="movie-info">
            <h3>Neon Genesis Evangelion</h3>
            <p>Experiments in 2000 destroyed humankind in a catastrophe called the Second Impact. Fifteen years later, humanity faces another trial. Giant beings called "Angels" appear, and the Special Agency NERV works covertly to fight them. 14-year-old Shinji Ikari becomes the center of this fight.</p>
            <button class="watch-button">Rent Now</button>
        </div>
    </div>
</div>
*/