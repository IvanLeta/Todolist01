import React from 'react';
import './App.css';
import {TaskTape, Todolist} from "./Todolist";




function App() {
    let tasks1: Array<TaskTape> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 1, title: "JS", isDone: true},
        {id: 1, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
        </div>
    );
}

export default App;
