import React,{useEffect, useContext, useState} from 'react';
import { createBrowserHistory } from "history";
import Container from '../components/destination/Container';
import Hero from '../components/destination/Hero';
import Tabs from '../components/destination/Tabs';
import { GlobalContext } from '../context/globalState';

const Destination = ({setBackground}) => {
    let history = createBrowserHistory();
    let { pathname } = history.location;
    const {destinations} = useContext(GlobalContext); 
    const [data,setData] = useState(destinations[0]); 
    const [tabLinks, setTabLinks] = useState([]);

    const activeTabhandler = (e) => {
        setData(destinations.find(d=> d.name === e));
    }

    useEffect(() => {
        setTabLinks( destinations.map(d=>{return d.name}))
        setBackground(pathname.replace('/',''));
  }, []);
    
  return (
        <Container>
            <Hero data={data}/>
            <Tabs data={data} tabLinks={tabLinks} activeTabHandler={activeTabhandler}/>
        </Container>
    )
}

export default Destination;
