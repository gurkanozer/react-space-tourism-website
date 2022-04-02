import React, { useEffect, useContext, useState } from "react";
import { createBrowserHistory } from "history";
import Container from "../components/destination/Container";
import Hero from "../components/destination/Hero";
import Tabs from "../components/destination/Tabs";
import { GlobalContext } from "../context/globalState";
import useLinks from "../hooks/useLinks";

const Destination = ({ setBackground }) => {
  let history = createBrowserHistory();
  let { pathname } = history.location;
  const { destinations } = useContext(GlobalContext);
  const [data, setData] = useState(destinations[0]);
  const tabLinks = useLinks(destinations);

  const activeTabHandler = (e) => {
    setData(destinations.find((d) => d.name === e));
  };

  useEffect(() => {
    setBackground(pathname.replace("/", ""));
  }, [pathname, setBackground]);

  return (
    <Container>
      <Hero data={data} />
      <Tabs
        data={data}
        tabLinks={tabLinks}
        activeTabHandler={activeTabHandler}
      />
    </Container>
  );
};

export default Destination;
