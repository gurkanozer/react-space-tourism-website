import React,{useEffect} from 'react';
import { createBrowserHistory } from "history";
import Container from '../components/destination/Container';
import Hero from '../components/destination/Hero';
import Tabs from '../components/destination/Tabs';

const Destination = ({setBackground}) => {
    let history = createBrowserHistory();
    let { pathname } = history.location;
  
    useEffect(() => {
      setBackground(pathname.replace('/',''));
  }, []);
    return (
        <Container>
            <Hero/>
            <Tabs/>
        </Container>
    )
}

export default Destination;
