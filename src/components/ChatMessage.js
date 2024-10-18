import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center p-2'>
      <img 
            className="w-8 h-8"
            alt='user-icon' 
            src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" 
        />
        <span className='font-bold px-2'>{name}</span>
        <span className='px-2'>{message}</span>
    </div>
  )
}

export default ChatMessage
