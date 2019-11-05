import { useEffect, useState } from "react";

import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      // console.log(response.data.businesses);
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMsg("Oops!!! Something went wrong");
    }
  };

  // runs only once
  useEffect(() => {
    searchApi("indian");
  }, []);
  return [searchApi, results, errorMsg];
};
