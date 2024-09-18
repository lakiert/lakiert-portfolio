import { useState } from 'react'
import './App.css'
import ListElement from './ListElement';



export default function App() {

  return (
    <div className='big-container'>

      <h1 id="big-title">Aleksandra Ląkiert</h1>
      <h2 id="small-title">My projects</h2>

      <div className='list-container'>
          <ListElement projectName={"Recipe app"} linkProject={"https://lakiert-delicious.netlify.app"} linkGithub={"https://github.com/lakiert/recipe_app"}></ListElement>
          <ListElement projectName={"To-do list"} linkProject={"https://lakiert-todo-list.netlify.app"} linkGithub={"https://github.com/lakiert/react-to-do-list"}></ListElement>
          <ListElement projectName={"Example company website"} linkProject={"https://lakiert.github.io/company_website"} linkGithub={"https://github.com/lakiert/company_website"}></ListElement>
      </div>
    </div>
  )
}
