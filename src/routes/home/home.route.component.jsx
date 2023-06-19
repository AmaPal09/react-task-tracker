//Apps.js 

import { Fragment, useContext } from 'react';
import {Route, Routes} from 'react-router-dom'

import { OnAddContext } from '../../contexts/onAdd.context';
import { TaskListContext } from '../../contexts/taskList.context';

import Header from '../../components/header/header.component'; 
import Tasks from '../../components/tasks/tasks.component';
import AddTaskForm from '../../components/add-task-form/add-task-form.component';
import Footer from '../../components/footer/footer.component';
// import About from '../../components/about/about.component';
import About from '../about/about.route.component';


function Home() {
    const { showAddTask } = useContext(OnAddContext);
    const {taskList } = useContext(TaskListContext);   

  return (
    <div className="task-tracker-container">
        <Header title='Task Tracker' /> 
        <Routes> 
            <Route path="/" true element= {
                <Fragment>
                    {showAddTask && <AddTaskForm /> }
                    {taskList.length > 0 ? 
                        (<Tasks taskList={taskList} /> ) : 
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
