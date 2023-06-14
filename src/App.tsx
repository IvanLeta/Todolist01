import React from 'react';
import './App.css';
import {TaskTape, Todolist} from "./Todolist";




function App() {
    let tasks1: Array<TaskTape> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 1, title: "JS", isDone: true},
        {id: 1, title: "React", isDone: false}
    ]

    let tasks2: Array<TaskTape> = [
        {id: 1, title: "Fight Club", isDone: true},
        {id: 1, title: "The 13th Warrior", isDone: false},
        {id: 1, title: "Life of Pi", isDone: false}
    ]


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Movies" tasks={tasks2}/>
        </div>
    );
}

export default App;
