import React, { useState, useEffect, useRef } from "react";
import TodoCreator from "./FormInput";
import TodoList from "./List";
import { createMuiTheme } from "@material-ui/core/styles";
import { toast } from "react-toastify";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#000000" },
  },
});

const Form = () => {
  const [newTodo, setNewTodo] = useState("");
  const [addToDos, setAddToDos] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const noteRef = useRef({});
  const [isInputEmpty, setInputEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    clearInput();
    inputRef.current.focus();
  };

  const preventSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const addTodo = (text) => {
    if (text !== "") {
      // post
      fetch("https://afternoon-lowlands-88961.herokuapp.com/addtodo", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ text }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Add a Text Successfully");
          const newTodos = [...todos, { text, _id: data.insertedId }];
          setNewTodo("");
          setTodos(newTodos);
        });
    } else {
      console.log("text", text);
      setInputEmpty(true);
    }
  };

  const removeTodo = (inx, id) => {
    fetch(`https://afternoon-lowlands-88961.herokuapp.com/addtodo/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    const newArr = [...todos];
    newArr.splice(inx, 1);
    setTodos(newArr);
  };

  const completeTodo = (inx, id) => {
    // /todos/:_id put
    console.log(todos[inx]);
    if (id) {
      fetch(`https://afternoon-lowlands-88961.herokuapp.com/addtodo/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ isCompleted: !todos[inx].isCompleted }),
      })
        .then((res) => res.json())
        .then((data) => {
          const newTodos = [...todos];
          newTodos[inx].isCompleted = !newTodos[inx].isCompleted;
          setTodos(newTodos);
        });
    }
  };

  const editTodo = (inx) => {
    const newTodos = [...todos];
    newTodos[inx].isEditing = !newTodos[inx].isEditing;
    setTodos(newTodos);
  };

  const saveTodo = (inx, id) => {
    if (id) {
      fetch(`https://afternoon-lowlands-88961.herokuapp.com/edit/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ text: noteRef.current[inx].value }),
      })
        .then((res) => res.json())
        .then((data) => {
          const newTodos = [...todos];
          newTodos[inx].isEditing = !newTodos[inx].isEditing;
          newTodos[inx].text = noteRef.current[inx].value;
          setTodos(newTodos);
        });
    }
  };

  const clearInput = () => {
    setNewTodo("");
  };

  const setTodo = (todo) => {
    setInputEmpty(false);
    setNewTodo(todo);
    setAddToDos(todo);
  };

  useEffect(() => {}, [todos]);

  useEffect(() => {
    fetch("https://afternoon-lowlands-88961.herokuapp.com/addtodo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form m-5 ">
      <TodoCreator
        theme={theme}
        todo={newTodo}
        addToDo={addToDos}
        setTodo={setTodo}
        clearInput={clearInput}
        inputRef={inputRef}
        isInputEmpty={isInputEmpty}
        preventSubmit={preventSubmit}
      />

      <TodoList
        className="bg-slate-800"
        theme={theme}
        todos={todos}
        completeTodo={completeTodo}
        editTodo={editTodo}
        deleteTodo={removeTodo}
        saveTodo={saveTodo}
        noteRef={noteRef}
        preventSubmit={preventSubmit}
      />
    </form>
  );
};

export default Form;
