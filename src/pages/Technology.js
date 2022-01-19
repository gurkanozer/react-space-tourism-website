import React, {useEffect} from 'react';
import { createBrowserHistory } from "history";

const Technology = ({setBackground}) => {
    let history = createBrowserHistory();
    let { pathname } = history.location;
  
    useEffect(() => {
      setBackground(pathname.replace('/',''));
  }, []);
    return (
        <div>
            
        </div>
    )
}

export default Technology;
