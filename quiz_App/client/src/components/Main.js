import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'


export default function Main() {
    
    const inputRef = useRef(null)

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>


        <ol>
            <li> there will be 10 questions asked one after another</li>
            <li> 10 points are awarded for every correct answer</li>
            <li> the user can select only one option at a time </li>
            <li> you can change and review answers before submiting the quiz</li>
            <li> the result is declared at the end of the quiz</li>

        </ol>

        <form id="form">
            <input ref = {inputRef} className='userid' type='text' placeholder='Username*'/>

        </form>

        <div className='start'>
            <Link className='btn' to = {'quiz'}> Start Quiz </Link>

        </div>
      

    </div>
  )
}
