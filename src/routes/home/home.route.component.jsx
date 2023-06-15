//Apps.js 

import { useState, useEffect, Fragment, useContext } from 'react';
import {Route, Routes} from 'react-router-dom'

import { OnAddContext } from '../../contexts/onAdd.context';

import Header from '../../components/header/header.component'; 
import Tasks from '../../components/tasks/tasks.component';
import AddTaskForm from '../../components/add-task-form/add-task-form.component';
import Footer from '../../components/footer/footer.component';
import About from '../../components/about/about.component';


function Home() {
    const { showAddTask } = useContext(OnAddContext);  
    const [taskList, setTaskList] = useState([]);
    
    useEffect(()=> {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            console.log(tasksFromServer); 
            setTaskList(tasksFromServer)
        } 
        
        getTasks();         
    }, []);

    //Fetch tasks from API 
    async function fetchTasks() {
        const res = await fetch('http://localhost:5100/tasks');
        const data = await res.json();
        return data;
    }

    //Fetch single task from API 
    const fetchTask = async (id) =>  {
        const res = await fetch(`http://localhost:5100/tasks/${id}`);
        const data = await res.json();
        return data;
    }

    //deleteTask -- use context later 
    const deleteTask = async (id) => { 
        // console.log(id, 'delete');
        await fetch(`http://localhost:5100/tasks/${id}`, {
            method: 'DELETE'
        })
        setTaskList(taskList.filter((task) => task.id !== id)); 
    }

    //toggle task reminders 
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id); 
        const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}; 

        const res = await fetch(`http://localhost:5100/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        
        const data = await res.json(); 

        // console.log('toggle', id); 
        setTaskList(taskList.map((task) => task.id === id ? 
            {...task, reminder: data.reminder} : 
            task
        )); 
    }

    //Add tasks 
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5100/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(task)
        })
        const data = await res.json()

        setTaskList([...taskList, data]); 
    } 

  return (
    <div className="task-tracker-container">
        <Header title='Task Tracker' /> 
        <Routes> 
            <Route path="/" true element= {
                <Fragment>
                    {showAddTask && <AddTaskForm onSubmitForm={addTask}/> }
                    {taskList.length > 0 ? 
                        (<Tasks 
                            taskList={taskList} 
                            onDelete={deleteTask} 
                            onToggle={toggleReminder} /> 
                        ) : 
                        ('No tasks to show')
                    }
                </Fragment>
            }></Route>
            <Route path="/About" element={<About />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default Home;
