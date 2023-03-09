import React,{useState,useEffect} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {IMAGE_URL,API_KEY} from '../constants/constants'
const RowPost = ({title,isSmall,url}) => {
  const [orginals,setOrginals]=useState([])
  const [trailer,setTrailer]=useState('')
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  useEffect(()=>{
axios.get(url).then(response=> setOrginals(response.data.results))
  },[])
  const movieTrailer=(id)=>{
    console.log(id);
axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=> {
  console.log(response.data)
  if(response.data.results.length!==0){
    setTrailer(response.data.results[0])
  }else{
    console.log("No Trailer Available");
  }
}).catch(err=>console.log(err))
  }
 const exitTrailer=()=>{
setTrailer('')
}
  return (
    
    <div className='row'>
        <h2 >{title}</h2>
        <div className='posters'>
       {orginals.map(movie=>(
        <div  className='movies' key={movie.id}>
        <img onClick={()=>movieTrailer(movie.id)} className={isSmall?"smallPoster":"poster"} src={IMAGE_URL+movie?.backdrop_path} alt="posters" />
        <i className="fa-solid playbtn fa-play"></i>
        </div>
       ))}
        </div>
       {trailer &&  
       <div className="youtube">
        <i onClick={exitTrailer} className="fa-solid trailer fa-x"></i>
        <Youtube videoId={trailer.key} opts={opts} /> 
        </div>}
    </div>
    
  
  
  )
}

export default RowPost