import React, { useState, useEffect } from "react";
import { getSessions } from "./api/sessionApi";
import TextInput from "./TextInput";

const newSession = {
  id: null,
  title: ""
};

function App() {
  //this will hold our form data
  const [session, setSession] = useState(newSession);
  //const state = useState[];
  //const session = useState[0];
  //const setSessions = userState[1];
  const [sessions, setSessions] = useState([
    { id: 1, title: "React" },
    { id: 2, title: "C#" },
    { id: 3, title: "Python" }
  ]);

  useEffect(() => {
    getSessions().then(sessions => setSessions(sessions));
  }, []);

  function deleteSession(id) {
    const newSessions = sessions.filter(session => session.id !== id);
    setSessions(newSessions);
  }

  function saveSession(event) {
    event.preventDefault();
    //assign an id on the client
    const sessionToSave = {
      ...session,
      id: Math.random()
    };
    setSessions([...sessions, sessionToSave]);

    //clear out the form
    setSession(newSession);
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
    const newSession = { ...session, title: event.target.value }; //copy session (spread syntax) and set value to the title
    setSession(newSession);
  }

  //JSON-server on GITHUB for mock data
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
        <TextInput
          id="title"
          onChange={onChange}
          label="Title"
          value={session.title}
        />
        <input type="submit" value="Add Session" />
      </form>
      <ul>{sessions.map(renderSession)}</ul>
    </>
  );
}

export default App;
