import { useEffect, useState } from "react";

const useLinks = (data) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(
      data.map((d) => {
        return d.name;
      })
    );
  }, [data]);
  return links;
};
export default useLinks;
