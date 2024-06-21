import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { movieSliceactions } from '../../store/movies';


const VideoTitle = ({BgMovie}) => {
  console.log("BG",BgMovie)
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{BgMovie.original_title}</h1>
        <p className="py-6 text-lg w-1/3">{BgMovie.overview}</p>
        <div className='my-3'>
            <button className="bg-white text-black text-lg px-12 py-3 rounded-lg hover:bg-opacity-80 ">  ▶️ Play</button>
            <button className="bg-grey text-white text-lg px-12 py-3 rounded-lg hover:bg-opacity-80 ">More Info</button>

        </div>
    </div>
  )
}

export default VideoTitle