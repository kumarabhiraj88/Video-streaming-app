import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const getVideos=async()=>{
    const result=await fetch(YOUTUBE_VIDEOS_API);
    const json= await result.json();
    setVideos(json.items)
  }

  useEffect(()=>{
    getVideos();
  },[]);
  return (
    <div className="flex flex-wrap">
      {videos?.map((videoInfo)=>(
        <Link key={videoInfo?.id} to={"/watch?v="+videoInfo.id}>
          <VideoCard info={videoInfo} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer;
