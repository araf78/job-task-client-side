import { List, ListItem, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
      width: '100%',
      color: "#fafafa",
      backgroundColor: '#263238',
      marginLeft: 100,
    borderRadius: "15px",
    marginBottom: "15px",
    marginTop: 20,
  },
  li: {
      borderBottom: '1px dashed black'
  }
}));

const ToDo = () => {
  const [ todos, setTodos ] = useState([]);
  const classes = useStyles();


  useEffect(()=>{
    fetch("https://afternoon-lowlands-88961.herokuapp.com/addtodo")
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
                                  
                                  
                                </>
                        }
                       
                    </ListItem>
                );
            })}
        </List>
  );
};

export default ToDo;