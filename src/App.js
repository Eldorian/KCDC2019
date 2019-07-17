import React from "react";

function App(){
  const sessions =[
    "React",
    "C#",
    "Python"
  ];

  //what I return here gets rendered
  return (
    <>
      <h1>KCDC Sessions</h1>{ sessions.map(session => <li>{session}</li>)}
    </> 
    );
};

export default App;