import React, { useEffect, useState } from "react";
import { List, ListItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginLeft: 100,
    marginTop: 20,
  },
  li: {
    borderBottom: "1px dashed black",
  },
}));
const CompletedTasks = () => {
  const [todos, setTodos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:5000/completedtodos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);
  return (
    <List className={classes.root}>
      {todos.map((todo, inx) => {
        const labelId = `list-todo-${todo}`;

        return (
          <ListItem role={undefined} dense button className={classes.li}>
            {
              <>
                <label
                  htmlFor="task" // better accessibility with HTML
                  className="visuallyhidden"
                >
                  {todo.text}
                </label>
              </>
            }
          </ListItem>
        );
      })}
    </List>
  );
};

export default CompletedTasks;
