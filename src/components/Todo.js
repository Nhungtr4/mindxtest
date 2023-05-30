import React, {useState} from 'react'

const ToDoTask = () =>{
    const [input, setInput] = useState('');
    const [task, setTask] = useState([])


    const add = ( e ) =>{
        e.preventDefault();
        if (input === '') return;
        setTask([...task,{
            text:input,
            completed:false
        }]);
        setInput('');
    }
    

    const  remove = (index) => {
        
        setTask(task.filter((_item,i)=> i !== index));
        console.log('delete');
        console.log(index);
    
    }

    const toggleChecked = (index) => {
        const obj = {
            ...task[index]
        };
        obj.completed= !obj.completed;

        setTask([
            ...task.slice(0, index),obj
        ].concat(task.slice(index + 1)));
        console.log("list");
        console.log(index);
    }


    return(
        
        <div className='container'>

    
                <form onSubmit={add}>
                    <input
                        placeholder='Add task'
                        className='in-text'
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        />
                    <button className='add-btn'>Add</button>
                </form>
                {task.map((item, i) => (
                    <div className='raws' key={i}>
                        <div className='spanContainer'>
                            <span  className='span-map' style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</span>
                        </div>
                        <input
                            className='check'
                            type="checkbox"
                            checked={item.completed}
                            onClick={() => toggleChecked(i)}
                            readOnly
                        />
                        <button className='delete-btn' onClick={() => remove(i)}>Delete</button>
                    </div>
                ))}
        </div>
        
    )
}

export default ToDoTask;