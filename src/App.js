import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, FormControl } from "react-bootstrap";

import Articles from "./components/Articles";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=d22612e9ee684aa3807ab9068737748a"
      );
      console.log(response.data.articles);
      setArticles(response.data.articles);
    };
    getData();
  }, []);

  console.log(search);
  return (
    <div className="py-5">
      <Container>
        <FormControl className="mb-3" onChange={(e) => setSearch(e.target.value)} />
        <Articles articles={articles} searchKey={search} />
      </Container>
    </div>
  );
};

export default App;
