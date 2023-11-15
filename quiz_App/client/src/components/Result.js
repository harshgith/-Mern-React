import React from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'  

import ResultTable from './ResultTable'

export default function Result() {

    function onRestart(){
        console.log("on Restart")
    }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>


        <div className='result flex-center'> 

            <div className='flex'>
                <span>Username</span>
                <span className='bold'>Daily Scores </span>
            </div >

            <div className='flex'>
                <span>Total Points</span>
                <span className='bold'>50 </span>
            </div >

            <div className='flex'>
                <span>Total Questions</span>
                <span className='bold'>10 </span>
            </div >

            <div className='flex'>
                <span>Total Attempts</span>
                <span className='bold'>03 </span>
            </div >

            <div className='flex'>
                <span>Total Points scored</span>
                <span className='bold'>40 </span>
            </div >

            <div className='flex'>
                <span>Final Result</span>
                <span className='bold'>Passed </span>
            </div >


           

        </div>
        <div className='start'>
                <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>

            </div>


            <div className='container'>
                <ResultTable>
                    
                </ResultTable>
            </div>
      
    </div>
  )
}
