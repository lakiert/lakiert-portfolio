import { useState } from 'react'
import './App.css'
import ButtonSite from './ButtonSite'


export default function App() {

  return (
    <div className='big-container'>

      <h1 id="big-title">Aleksandra Ląkiert</h1>
      <h2 id="small-title">My projects</h2>

      <div className='list-container'>
          <ButtonSite text={"Example company website"} link={"https://lakiert.github.io/company_website"}></ButtonSite>
          <ButtonSite text={"To-do list"} link={"https://lakiert-todo-list.netlify.app"}></ButtonSite>
      </div>
    </div>
  )
}
