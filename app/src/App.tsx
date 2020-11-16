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
            This pandemic has caused an intense economic crisis with over 30
            million workers losing their jobs. To file for unemployment, workers
            need access to the internet. Finding and maintaining an income today
            is only possible with internet access. By providing free internet,
            we can help our communities rebuild in response to the COVID-19
            recession.
          </p>
        </div>
        <div className="column">
          <h1 className="title">Survivors</h1>
          <p className="body">
            Internet access is vital to safety because abuse and violence thrive
            in isolation. We can combat the isolation created by the pandemic by
            providing internet access that allows people to connect to online
            and have access to resource.s While some service providers are
            working hard to provide support for survivors online, those without
            internet access are unreachable. Issues facing marginalized
            communities due to systemic and institutionalized racism, classism,
            ableism, and other forms of oppression are only exacerbated by lack
            of internet access. For many of these communities, the ability to
            stay connected during this time is literally a lifeline.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
