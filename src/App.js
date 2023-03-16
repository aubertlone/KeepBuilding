import React from "react";

function MyButton() {
  return <button>I'm a button</button>;
}

const Video = () => {
  return (
    <video controls width="50%">
      <source src="https://i.imgur.com/wYlAH81.mp4" type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

function Words() {
  return (
    <div>
      <h1 style={{ color: "Grey" }}>Learn Beta.React.js</h1>
      <p style={{ color: "Green" }}>
        Ok I'll experiment with some basic components & React architecture{" "}
      </p>
      <h1>03/13/2013</h1>

      <h2 style={{ color: "Blue" }}>Cool I did something here!</h2>
      <p> React Components must always start with a capital Letter Dummy!</p>
    </div>
  );
}

export default function MyApp() {
  return (
    <div className="App">
      <Words />

      <Video />

      <MyButton />
    </div>
  );
}
