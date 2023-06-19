//home.route.component.jsx 

import { Fragment, useContext } from 'react';
import {Route, Routes} from 'react-router-dom'

import { OnAddContext } from '../../contexts/onAdd.context';
import { TaskListContext } from '../../contexts/taskList.context';

import Header from '../../components/header/header.component'; 
import Tasks from '../../components/tasks/tasks.component';
import AddTaskForm from '../../components/add-task-form/add-task-form.component';
import Footer from '../../components/footer/footer.component';

import About from '../about/about.route.component';

import TaskTrackerContainer from './home.styled.route'; 


function Home() {
    const { showAddTask } = useContext(OnAddContext);
    const {taskList } = useContext(TaskListContext);   

  return (
    <TaskTrackerContainer> 
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
    </TaskTrackerContainer>
  );
}

export default Home;
