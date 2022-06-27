import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube'
import "./RowPost.css";
import axios from "../../axios";
import {api_key, img_url ,base_url} from "../../Constance/Constance";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert(err)
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const openTriler=(id)=>{
    
axios.get(`${base_url}/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response)=>{
  console.log('helloooo')
console.log(response.data.results)
  if(response.data.results.length !==0){
    setUrlId(response.data.results[0])
  }else{
    alert('array is empty')
  }
})
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie,index) => {
          return (
            <img key={index}
              onClick={()=>openTriler(movie.id)}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${img_url+movie.backdrop_path}`}
              alt="poster"
            />
          )
        })}
      </div>
     { urlId && <Youtube videoId={urlId.key} opts={opts}  />}
    </div>
  );
}

export default RowPost;
