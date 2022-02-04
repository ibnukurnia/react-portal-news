import React from "react";
import { Row, Col } from "react-bootstrap";

import Article from "./Article";

const Articles = ({ articles, searchKey }) => {
  return (
    <>
      <Row className="gy-2 gy-md-3">
        {articles
          .filter((article) => {
            if (article.title.toLowerCase().includes(searchKey.toLowerCase())) {
              return article;
            }
          })
          .map((article, index) => {
            return (
              <>
                <Col sm="6" md="4" key={index}>
                  <Article article={article} />
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default Articles;
