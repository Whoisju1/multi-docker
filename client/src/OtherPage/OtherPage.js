import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      I'm some other Page
      <Link to="/">Go back home</Link>
    </div>
  );
};
