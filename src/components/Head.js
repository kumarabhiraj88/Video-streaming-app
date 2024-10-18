import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
import Youtube from './icons/Youtube';
import HamburgerMenu from './icons/HamburgerMenu';
import SearchIcon from './icons/SearchIcon';
//importing the action for storing search suggestion to cache
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  //This line creates a variable dispatch that holds the reference to the dispatch function.
  //With this, you can use dispatch in your component to send actions to the Redux store.
  const dispatch = useDispatch();
  const searchCache = useSelector((store)=> store.search);

  const [searchQuery, setSearchQuery]= useState("");
  const [suggestions, setSuggestions]= useState([]);

  const handleToggleMenu = ()=>{
    dispatch(toggleMenu())
  }

  const getSearchSuggestions= async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchQuery);
    const json = await data.json();
    const searchResults=json?.products[0]?.title;
    setSuggestions([searchResults])
    //disptch an action to store for storing the results to cache
    dispatch(cacheResults({
      [searchQuery]:searchResults
    }));
  }

  useEffect(()=>{
    if(searchQuery){

    //whenever the dependency changes, it will call this useeffect and start a new timer.
    //so, if we are not clearing it, there will be lot of timers running in the background for every keypress
    // to avoid this, need to clear the timer each time
    const timer = setTimeout(()=> {
      //checking if the input is present inside cache or not
      //if we are not caching the results, it will make api calls again for the same input- in case of backspace or as a new input
      if(searchCache[searchQuery]){
        setSuggestions([searchCache[searchQuery]])
      }
      else{
        getSearchSuggestions()
      }
    }, 200)  // it will make an api call after 200 milli seconds

    //while unmounting(re-rendering), the function inside the return will get executed first.
    //Here it cleares the timer (after the next keystroke, a new timer will get setup)
     return ()=>{ 
      clearTimeout(timer)
    }

    }
    
  }, [searchQuery])
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow'>
      <div className='flex col-span-1'>
        <div className="h-6" onClick={handleToggleMenu} >
          <HamburgerMenu />
        </div>
        <div className="h-6 mx-5">
          <Youtube />
        </div>
      </div>
      <div className='col-span-10'>
        <div>
          <input 
            className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
            type='text'
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            />
          <button className='border border-gray-400 py-2 rounded-r-full bg-gray-100'><SearchIcon /></button>
        </div>
        <div className='fixed bg-white px-2 py-2 w-[37rem] shadow-lg border border-gray-100'>
            <ul>
              {suggestions?.map((suggestion)=> <li key={suggestion} className="py-2 px-3 shadow-sm hover:bg-gray-10">{suggestion}</li>)}
            </ul>
        </div>
       
      </div>
      <div className='col-span-1'>
        <img 
            className="h-10"
            alt='user-icon' 
            src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" 
        />
      </div>
    </div>
  )
}

export default Head
