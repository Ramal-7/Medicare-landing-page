import React from 'react';
import './Info.css';

function Info(props) {
  return (
      <div className='information'>
      <img src={props.image} alt="logo" className="listimg" />
      <div className="list-info">{props.name}  </div>
      <div className="list-info">{props.regno} </div>
      <div className="list-info">{props.age}</div>
    </div>
  );
}
export default Info;