import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const [searchParams]= useSearchParams();
  const videoId= searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
  },[]);

  return (
    <div className="flex flex-col mx-20">
    <div className="px-5">
      <iframe 
        width="800" 
        height="400" 
        src={"https://www.youtube.com/embed/"+videoId}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage
