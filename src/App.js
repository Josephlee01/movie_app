import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="soup" />
      <Food fav="kimbap" />
      <Food fav="pizza" />
      <Food fav="kfc" />
    </div>
  );
}

export default App;
