import React from 'react';

export default function Title(props) {
  return (
    <div className='title'>
          <h1 style={{ margin:'50px 0 0 0'}}>{(props.title).toUpperCase()}</h1>
          <hr />
    </div>
  );
}
