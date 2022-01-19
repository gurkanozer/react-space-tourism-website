import React, {useEffect} from "react";
import { createBrowserHistory } from "history";

const Crew = ({ setBackground }) => {
  let history = createBrowserHistory();
  let { pathname } = history.location;

  useEffect(() => {
    setBackground(pathname.replace('/',''));
}, []);
  return (
    <div>
      <h1>CREW PAGE</h1>
    </div>
  );
};

export default Crew;
