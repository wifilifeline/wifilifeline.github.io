import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wifi is a Lifeline</h1>
        <p>
          Internet access is necessary to live in today’s world - necessary to
          work, to go to school, to get healthcare.
        </p>
      </header>

      <div className="row">
        <div className="column">
          <h1 className="title">Students and Youth</h1>
          <p className="body">
            With remote learning in every school district in King County, kids
            who do not have access to the internet effectively do not have
            access to their education. Remote learning is hard enough on
            students and families; lack of internet access should not be an
            added challenge. In order to ensure equitable learning experiences
            for all students, we need free and unlimited internet access.
          </p>
        </div>
        <div className="column">
          <h1 className="title">Workers</h1>
          <p className="body">
            With remote learning in every school district in King County, kids
            who do not have access to the internet effectively do not have
            access to their education. Remote learning is hard enough on
            students and families; lack of internet access should not be an
            added challenge. In order to ensure equitable learning experiences
            for all students, we need free and unlimited internet access.
          </p>
        </div>
        <div className="column">
          <h1 className="title">Survivors</h1>
          <p className="body">
            With remote learning in every school district in King County, kids
            who do not have access to the internet effectively do not have
            access to their education. Remote learning is hard enough on
            students and families; lack of internet access should not be an
            added challenge. In order to ensure equitable learning experiences
            for all students, we need free and unlimited internet access.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
