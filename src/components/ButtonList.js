import React from 'react';
import Button from './Button';

const buttonNames=["All","Music", "News", "Carnatic Music", "Live", "Satire", "Airplanes", "Tamil Cinema", "Mixes", "Dramedy", "Houseplants", "Used Cars", "Unboxing"];
const ButtonList=()=> {
  return (
    <div className='flex'>
      {buttonNames.map((buttonLabel)=>{
        return <Button key={buttonLabel} name={buttonLabel} />
      })}
    </div>
  )
}

export default ButtonList;
