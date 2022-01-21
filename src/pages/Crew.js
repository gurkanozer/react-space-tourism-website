import React,{useEffect, useContext, useState} from "react";
import { createBrowserHistory } from "history";
import Container from '../components/crew/Container';
import Title from '../components/crew/Title';
import Image from '../components/crew/Image';
import Tabs from '../components/crew/Tabs';
import { GlobalContext } from '../context/globalState';
import useLinks from "../hooks/useLinks";

const Crew = ({ setBackground }) => {
  let history = createBrowserHistory();
  let { pathname } = history.location;
  const {crew} = useContext(GlobalContext); 
  const [data,setData] = useState(crew[0]); 
  const tabLinks = useLinks(crew);

  const activeTabHandler = (e) => {
    setData(crew.find(c=> c.name === e));
}

  useEffect(() => {
    setBackground(pathname.replace('/',''));
}, [pathname,setBackground]);
  return (
      <Container>
        <Title/>
        <Image data={data} tabLinks={tabLinks}></Image>
        <Tabs data={data} tabLinks={tabLinks} activeTabHandler={activeTabHandler}></Tabs>
      </Container>
  );
};

export default Crew;
