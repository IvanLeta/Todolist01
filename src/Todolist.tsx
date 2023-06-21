import React from "react";

export type TaskTape = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskTape>
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li><input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    <button onClick={ () => { alert(t.id)}}>x</button>
                    </li>
                )
            }


        </ul>
        <button>All</button>
        <button>Action</button>
        <button>Completed</button>
    </div>
}