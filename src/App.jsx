import Heading from "./Heading";
import Addmenu from "./Addmenu";
import Task2 from "./Task2";
import Error from "./Error";
import { useState } from "react";
function App() {
  const [TodoItems2, setTodo] = useState([
    {
      name: "codind",
      date: "4/12/12",
    },
    {
      name: "eating",
      date: "2/2/24",
    },
    {
      name: "draw",
      date: "20/2/24",
    },
  ]);
  const [inputValue, setinput] = useState("");
  const [dateValue, setdate] = useState("");
  const clickbtn = (name) => {
    const updatedTodoItems = TodoItems2.filter((item) => item.name !== name);
    setTodo(updatedTodoItems);
  };

  const inputVal = (event) => {
    setinput(event.target.value);
  };
  const dateVal = (event) => {
    setdate(event.target.value);
  };

  const clickbtn2 = () => {
    let date = new Date(dateValue);
    let demo = {
      name: inputValue,
      date: date.toLocaleDateString("en-GB"),
    };
    let newtodo = [...TodoItems2, demo];
    setTodo(newtodo);
    setinput("");
    setdate("");
  };
  return (
    <center className="container">
      <Heading></Heading>
      <div className="item-container ">
        <Addmenu
          clickbtn2={clickbtn2}
          inputVal={inputVal}
          inputValue={inputValue}
          dateValue={dateValue}
          dateVal={dateVal}
        ></Addmenu>
        <Error Todo={TodoItems2}></Error>
        <Task2 TodoItems={TodoItems2} clickbtn={clickbtn}></Task2>
      </div>
    </center>
  );
}

export default App;
