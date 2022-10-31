import React from 'react';
import { useParams } from 'react-router-dom';

function H1({ children }) {
  return (
    <React.Fragment>
      <h1 style={{ fontSize: '58px', fontWeight: 400 }}>{children}</h1>
    </React.Fragment>
  );
}

function Breakfast() {
  let { breakfastId } = useParams();
  // console.log(params);
  if (!['American', 'English', 'African', 'Irish'].includes(breakfastId)) {
    return (<div> No Item</div>)
  }

  return (
    <div>
<p>I am on a route of {breakfastId}</p>
    </div>
  );
}

export default Breakfast;
