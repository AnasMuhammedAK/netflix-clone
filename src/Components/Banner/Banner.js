import React, { useEffect, useState } from "react";
import axios from '../../axios'
import {api_key,img_url} from '../../Constance/Constance'
import './Banner.css'

function Banner() {
 const [movie,setMovie] = useState()
 useEffect(() => {
 axios.get(`/trending/all/day?api_key=${api_key}`).then((response)=>{
    console.log(response.data.results[0])
    const number = Math.trunc(Math.random()*20) + 1;
    setMovie(response.data.results[number])
    
    
  })
  }, [])
  

  return (
    
    <div style={{backgroundImage:`url(${movie ?img_url+ movie.backdrop_path : ""})`}} className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_button">
          <button className="button">play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
    </div>
    <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
