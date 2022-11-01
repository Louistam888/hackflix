// in order to access info that is passedvia route aka URL we can utilize the useParams hook provided tous by the react router library

import axios from "axios";

import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from "react";

const Movieinfo = () => {

  const [movieData, setMovieData] = useState({});

  //this gives us back and object which will have the informatoin we've passed through the URl as a property in said object. it was passed down like a props from app
  const urlParamsValue = useParams();

  // we need to define a side effect which requests data about the specific movie which has been selected (and whose id can be found) in the url 
  //initialize state to hold the movie infomration data which is returned from the API 
  // run this side effect on component mount 

  useEffect(()=>{
    axios({
      url: `https://api.themoviedb.org/3/movie/${urlParamsValue.movieId}`,
      params: {
        api_key:"a652c9d6844cad6bd6a429e3f745f17b"
      }
    }).then((details)=> {
      setMovieData(details.data);
    })
  }, [])

//using destructuring to extract values from data object that is saved in state 
  const { original_title, tagline, overview, poster_path } = movieData;
    
  return (
      <div className="poster">
          <div className="description">
              <h2>{original_title}</h2>
              <h3>{tagline}</h3>
              <p>{overview}</p>
              <Link to="/catalogue" className="catalogue-button">
                Take me back to catalogue
              </Link>
          </div>
          <div className="poster-image">
              <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={`Movie poster for ${original_title}`}
              />
          </div>
      </div>
  )
}

export default Movieinfo 