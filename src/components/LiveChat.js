import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';

const LiveChat = () => {
const dispatch = useDispatch();
const chatMessages = useSelector((store)=>store.chat.messages);
const [liveMessage, setLiveMessage] = useState("");
    //do polling
    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            dispatch(addMessage({name:generateRandomName(), message:"Live chat testing"}));
        },1500);
        return ()=> clearInterval(timeInterval);
    },[]);

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log('my val', {name:"Abhiraj", message:liveMessage});
        dispatch(addMessage({name:"Abhiraj", message:liveMessage}));
        setLiveMessage("");
    }
  return (
    <>
    <div className='w-full h-[380px] ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    <div>
      { //Don't use index as key, while using api, use the id getting from that API.
      chatMessages.map((messages, index)=><ChatMessage key={index} name={messages.name} message={messages.message} />)
      }
      </div>
      
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=> handleSubmit(e)}>
        <input type='text' className='w-56' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
