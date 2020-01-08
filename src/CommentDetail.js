import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.avatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          Sam
        </a>
        <div className='metadata'>
          <span className='time'>Today at 06:00PM</span>
        </div>
        <div className='text'>It is a nice post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
