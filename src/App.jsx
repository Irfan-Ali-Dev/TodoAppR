import { use, useState } from "react"

function App() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todo , setTodo] = useState([]);

    const addTodo = (event)=> {
        event.preventDefault();
        console.log(title);
        console.log(description);
        
        todo.push({
            title,description
        })
        setTodo([...todo])

        setTitle('')
        setDescription('')
    }

    const deleteTodo = (index)=>{
        console.log("delete todo " , index);
        todo.splice(index , 1)
        setTodo([...todo])
        
    }
    const editTodo = (index)=>{
        console.log("edit todo " , index);

        const title = prompt ("enter updated title " , todo[index].title);
        todo[index].title = title
        setTodo([...todo])
        
    }

    return (
        <>
        <h1 className="logo">Todo App</h1>
        <form onSubmit={addTodo}>
            <input type="text" name="title" id="title" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
            <input className="root" type="text" name="description" id="description" placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)}/>
            <button> Add Todo</button>
        </form>

        <div>
            {todo.length > 0 ? todo.map((item, index) => {
                return <div key={index}>
                    <h1>No {index + 1}</h1>
                    <p className="card">Title: {item.title}</p>
                    <p className="card">Desc: {item.description}</p>
                    <button onClick={()=> editTodo(index)}>Edit</button>
                    <button onClick={()=> deleteTodo(index)}>Delete</button>
                </div>
            }) : <h1>No todo Found...</h1>}
        </div>

        </>
    )
}



export default App