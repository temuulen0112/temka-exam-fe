import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from "react";
import "../css/todo.css";

function Todo() {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/todo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setTodo(res.data)
            })
    }, [])
    return (
        <>
            <div className="box">
                <h1>My Todo list</h1>
            </div>
            <div className="todo-box">
                <div className="item">
                    <input type="radio" ></input>
                    <h2>My ToDo List #1</h2>
                    <img className="" src="/img/edit.png" alt="edit"></img>
                    <img src="/img/trash.png" alt="trash"></img>
                    {/* {todo.map((data) =>
                        <h2>{data.todoText}</h2>,
                        <h2>{data.createdAt}</h2>,
                        <h2>{data.checkedAt}</h2>
                    )} */}
                </div>
                <div>
                    <Form.Control type="text" placeholder="What's next" />
                </div>
                <Button className="btn" >Primary</Button>
            </div>
        </>

    )
}

export default Todo;