//Apps.js 

import { useState } from 'react';

import Header from './components/header/header.component'; 
import Tasks from './components/tasks/tasks.component';


function App() {

    const [taskList, setTaskList] = useState([
        {
            id: 1,
            text: 'Docs App',
            day: 'Jul 9 at 11:00 am', 
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at Post',
            day: 'Jul 12 at 2:30 am', 
            reminder: true,
        },
        {
            id: 3,
            text: 'Grocery shopping',
            day: 'Jul 12 at 8:00pm', 
            reminder: false,
        },
    ]);

    //deleteTask -- use context later 
    const deleteTask = (id) => { 
        // console.log(id, 'delete');
        setTaskList(taskList.filter((task) => task.id !== id)); 
    }

  return (
    <div className="container">
        <Header title='Task Tracker'/> 
        {taskList.length > 0 ? 
            (<Tasks taskList={taskList} onDelete={deleteTask} /> ) : 
            ('No tasks to show')
        }
        
    </div>
  );
}

export default App;
