import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ListItems = (props) => {
  return (
    <ListGroup>
      {props.items.map((el, i) => (
        <ListGroup.Item>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-around",
              width: "30%",
            }}
          >
            <Button variant="primary" onClick={() => props.done(el.id)}>
              {el.isDone ? "isDone" : "unDone"}
            </Button>
            <Button variant="danger" onClick={() => props.deleteItem(el.id)}>
              Delete
            </Button>
            <p
              style={{
                margin: "0px",
                textDecoration: el.isDone ? "line-through" : "none",
              }}
            >
              {el.text}
            </p>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListItems;
