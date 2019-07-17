import React, { useState } from "react";

function App() {
  //this will hold our form data
  const [session, setSession] = useState({
    id: null,
    title: ""
  });
  //const state = useState[];
  //const session = useState[0];
  //const setSessions = userState[1];
  const [sessions, setSessions] = useState([
    { id: 1, title: "React" },
    { id: 2, title: "C#" },
    { id: 3, title: "Python" }
  ]);

  function deleteSession(id) {
    const newSessions = sessions.filter(session => session.id !== id);
    setSessions(newSessions);
  }

  function saveSession(event) {
    event.preventDefault();
    //assign an id on the client
    const newSession = { ...session, id: Math.random() };
    setSessions([...sessions, newSession]);
  }

  function renderSession(session) {
    return (
      <li key={session.id}>
        <button onClick={() => deleteSession(session.id)}>Delete</button>{" "}
        {session.title}
      </li>
    );
  }

  function onChange(event) {
    //use event.target.value to update session.title in state
    const newSession = { ...session, title: event.target.title }; //copy session (spread syntax) and set value to the title
    setSession(newSession);
  }

  //mdn array (google search) - mdn docs for javascript
  //alt+arrow = moving line of code
  //shift+ctrl+click = adding text on multiple lines in a spot where you clicked
  //Babel
  //Code Sandbox (codesandbox.io)
  //what I return here gets rendered
  return (
    <>
      <h1>KCDC Sessions</h1>
      <form onSubmit={saveSession}>
        <h2>Add Session</h2>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" onChange={onChange} id="title" />
        </div>
        <input type="submit" value="Add Session" />
      </form>
      <ul>{sessions.map(renderSession)}</ul>
    </>
  );
}

export default App;
