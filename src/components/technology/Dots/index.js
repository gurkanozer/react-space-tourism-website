import React from "react";
import { DotContainer, DotLink } from "./style";
const Dots = ({ tabLinks, dataName, activeTabHandler }) => {
  return (
    <DotContainer>
      {tabLinks.map((link, index) => (
        <DotLink
          key={index}
          aria-label={link}
          className={link === dataName ? "active" : ""}
          onClick={() => activeTabHandler(link)}
        >{index + 1}</DotLink>
      ))}
    </DotContainer>
  );
};

export default Dots;
