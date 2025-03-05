import React from 'react';
import { useRouteError } from 'react-router-dom';
import '../styles/Error.css'; 

export default function Error() {
  const error = useRouteError();
  console.log('Error page',error);

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>It seems the page you're looking for doesn't exist or something went wrong.</p>
      {error && <p className="error-code">Error Code: {error.status || 'Unknown'}</p>}
      <a href="/" className="home-link">Go back to Home</a>
    </div>
  );
}
