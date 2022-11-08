import React from 'react';
import {ITodo} from "../types/data";


interface ITodoItem extends ITodo{
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, toggleTodo, removeTodo} = props;

    return (
        <div className='todo-items'>
                <div className='todo-title'>
                    {title}
                </div>
                <div className='todo-input-btn'>
                    <input className='todo-input-checkbox' type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
                    <button className='todo-btn-remove' onClick={() => removeTodo(id)}>X</button>
                </div>
        </div>
    );
};

export {TodoItem};