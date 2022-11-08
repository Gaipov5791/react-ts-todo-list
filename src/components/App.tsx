import React, {useState, useEffect, useRef} from 'react';
import {ITodo} from "../types/data";
import {TodoItem} from "./TodoItem";
import {TodoList} from "./TodoList";
import '../App.css';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange:  React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }

    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
            setValue('');
        }
    }

    const removeTodo = (id: number) : void => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleTodo = (id: number) : void => {
        // @ts-ignore
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                complete: !todo.complete
            }

        }))
    }

    useEffect (() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
    <div className='todo'>
        <div className='container'>
            <div style={{marginBottom: '20px'}}>
                <h1>Todo List</h1>
                <input className='todo-input' value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
                <button className='todo-btn' onClick={addTodo}>Add</button>
            </div>

        </div>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
