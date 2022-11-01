import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";


const Catalogue =()=> {

  //initalize a state variable to hold the data that is returned from the API

  //we need to define a side effect which will make a request to the discover/movie endpoint 
  //this side effect will only be run once on component mount
  // once data comes back from the API we will save that data in state 

  const [movies, setMovies] = useState([]);

  useEffect(()=> {

    axios({
      url:"https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key:"a652c9d6844cad6bd6a429e3f745f17b",
        include_adult: false,
        primary_release_year: 1998
      }
    }).then((allMovies)=> {
      setMovies(allMovies.data.results);
    })
  }, [])

  return (
    <ul className="catalogue">
      {
        movies.map((movieObj) => {
          return <li key={movieObj.id}>
            <Link to={`/movie/${movieObj.id}`}>
              {/* we added an extra /movie here just we can better protect theurl from people just entering a random number at the end of the url  */}
              <img 
                src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} 
                alt={`Poster for ${movieObj.original_title}`} />
            </Link>
            </li>
        })}
    </ul>
      // map through the movie data in state and render the movies on the page 
  )
}

export default Catalogue; 

