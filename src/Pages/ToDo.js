import { List, ListItem, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
      width: '100%',
      backgroundColor: '#f5f5f5',
      padding: 0
  },
  li: {
      borderBottom: '1px dashed black'
  }
}));

const ToDo = () => {
  const [ todos, setTodos ] = useState([]);
  const classes = useStyles();


  useEffect(()=>{
    fetch("http://localhost:5000/addtodo")
    .then((res) => res.json())
    .then((data) =>{
      setTodos(data)
    });
},[])

  return (
    <List className={classes.root}>
            {todos.map((todo, inx) => {
                const labelId = `list-todo-${todo}`;

                return (
                    <ListItem
                       
                        role={undefined}
                        dense
                        button
                        className={classes.li}
                    >
                       
                        {
                         
                                
                                
                                <>
                                    <label
                                        htmlFor="task" // better accessibility with HTML
                                        className="visuallyhidden"
                                    >
                                        {todo.text}
                                    </label>
                                    <input
                                        className="form__edit-input"
                                        defaultValue={todo.text}
                                       
                                        id="task"
                                    />
                                  
                                </>
                        }
                       
                    </ListItem>
                );
            })}
        </List>
  );
};

export default ToDo;