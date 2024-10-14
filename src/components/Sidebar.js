import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  //subscribing to the redux store (only to a specific part of the store)
  const toggleMenuStatus= useSelector((store)=>store.app.isMenuOpen);
  
  //this method is known as Early Return Pattern
  if(!toggleMenuStatus){ return null;}

  return (
    <div className="p-5 shadow-lg w-48">
      <h1 className='font-bold'><Link to="/">Home</Link></h1>
      <h1 className='font-bold'>Shorts</h1>
      <h1 className='font-bold'>Subscriptions</h1>
      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Channel1</li>
        <li>Channel2</li>
        <li>Channel3</li>
        <li>Channel4</li>
        <li>Channel5</li>
        <li>Channel6</li>
        <li>Channel7</li>
        <li>Show more</li>
      </ul>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Sopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Courses</li>
        <li>Fashion & beauty</li>
        <li>Podcasts</li>
      </ul>

      <h1 className='font-bold pt-5'>More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>Youtube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube kids</li>
      </ul>
      <h1 className='font-bold pt-5'>Settings</h1>
      <h1 className='font-bold'>Report history</h1>
      <h1 className='font-bold'>Help</h1>
      <h1 className='font-bold'>Send feedback</h1>
    </div>
  )
}

export default Sidebar;
