import './App.css';
import Navbar from './components/Navbar';
import { Todos } from './components/Todos';
import { Footer } from "./components/Footer";
import { About } from './components/About';
import { AddTodo } from './components/AddTodo';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("on Delete of" , todo);
    setTodos(todos.filter((todoItem) => {
      return todoItem !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    // console.log("adding todo" , title,desc);
    let sno;
    if (todos.length === 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);





  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const deleteAll = ()=> {
    setTodos(todos.filter( (item) => {      
      return item === null;
    }))
    localStorage.setItem("todos" , JSON.stringify([]));
    
  }

  return (
    <>
      <Router>
        <Navbar title= "Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} deleteAll={deleteAll} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
