import React from 'react'
import { GoChecklist } from "react-icons/go";
import TaskList from '../components/TaskList/TaskList';
import AddTask from '../components/AddTask/AddTask';
import NavBar from '../components/NavBar/NavBar';
import './Home.css'
import Filter from '../components/Filter/Filter';
import SearchT from '../components/SearchTask/SearchTask';


function Home() {
  return (
  <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
     <div class="row m-1 p-4">
        <div class="col">
            <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <GoChecklist  style={{ marginTop:"10px", marginRight:"5px", color:"blue"}}/>
                <u className='title-todo'>ToDoList App</u>
            </div>
        </div>
    </div>
      <SearchT/>
      <AddTask/>
      <div className='filter-nav'>
      <NavBar/>
      <Filter/>
      </div>
      <TaskList />
    </div>
  )
}

export default Home