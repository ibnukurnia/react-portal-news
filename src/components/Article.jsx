import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const Article = ({ article }) => {
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Img src={article.urlToImage} alt={article.title} />
          <Card.Title>{`${article.title}`.length >= 100 ? `${article.title}` : `${article.title}`}</Card.Title>
          <Card.Subtitle>
            {`${article.author}` !== "null" ? `${article.author}` : "Anonim"} {" - "}
            {new Date(`${article.publishedAt}`).toLocaleString("id-ID")}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>{`${article.description}` !== "null" ? `${article.description}` : "No content"}</Card.Text>
          <a href={article.url}>
            <Button>Read More</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Article;
