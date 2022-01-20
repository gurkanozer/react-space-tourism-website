import React, {useEffect, useContext, useState} from 'react';
import { createBrowserHistory } from "history";
import { GlobalContext } from '../context/globalState';
import Container from '../components/technology/Container';
import Title from '../components/technology/Title';
import Image from '../components/technology/Image';
import Dots from '../components/technology/Dots';
import Content from '../components/technology/Content';
import useLinks from '../hooks/useLinks';

const Technology = ({setBackground}) => {
    let history = createBrowserHistory();
    let { pathname } = history.location;
    const {technology} = useContext(GlobalContext); 
    const [data,setData] = useState(technology[0]);
    const tabLinks = useLinks(technology); 
  
    const activeTabHandler = (e) => {
        setData(technology.find(t=> t.name === e));
    }
    useEffect(() => {
        setBackground(pathname.replace('/',''));
  }, []);
    return (
        <Container>
            <Title/>
            <Image data={data}/>
            <Dots dataName= {data.name} tabLinks={tabLinks} activeTabHandler={activeTabHandler}/>
            <Content data={data}/>
        </Container>
    )
}

export default Technology;
