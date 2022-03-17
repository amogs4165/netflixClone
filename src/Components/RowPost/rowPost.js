import React, { useEffect, useState } from 'react'
import './rowPost.css'
import axios from '../../axios'
import { API_KEY, ImageUrl } from '../constants/constant'
import YouTube from 'react-youtube';
function RowPost(props) {
  const [movie, setMovie] = useState([])
  const [urlId, seturlId] = useState("")
  
  useEffect(() => {
    axios.get(props.url).then((resp)=>{
      console.log(resp)
      setMovie(resp.data.results)
    }).catch(err=>{alert('Network Error')})
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handMovieId = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((resp)=>{
      if(resp.data.results !== 0){

        seturlId(resp.data.results[0])
      }else{

        console.log(resp.data)
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movie.map((movie)=>
       
        <img onClick={()=>handMovieId(movie.id)} className= {props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${ImageUrl+movie.backdrop_path}`}/>
        )}
        </div>
        {urlId&&<YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost