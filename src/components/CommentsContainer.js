import React from 'react';

const commentsData= [
    {
        id:1,
        name:"Sreekumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies:[
            {
                id:11,
                name:"Siju",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
            }
        ]
    },
    {
        id:2,
        name:"Sreekumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        id:3,
        name:"Sreekumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        id:4,
        name:"Sreekumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        id:5,
        name:"Sreekumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip"
    }
]

const Comment= ({data})=>{
    const {name, text}= data;

    return (
        <div className='flex py-5'>
            <img 
            className="w-8 h-8"
            alt='user-icon' 
            src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" 
        />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
        </div>
    )
}

const CommentsList=({comments})=>{
    return comments?.map((comment)=> {
        return (
        <div>
            <Comment key={comment?.id} data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                {comment?.replies &&<CommentsList key={comment.replies?.id} comments={comment.replies}/>}
            </div>
        </div>
    )})
}
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments</h1>
        {<CommentsList comments={commentsData} />}
    </div>
  )
}

export default CommentsContainer
