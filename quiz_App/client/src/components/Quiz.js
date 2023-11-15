import React from 'react'
import Questions from './Questions' 


export default function Quiz() {
    /**next button */
    function onNext(){
        console.log('On next click')
    }
    /**previous button */
    function onPrev(){
        console.log('On Prev click')
    }


  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display question*/}
        <Questions></Questions>
        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button> 


        </div>
      
    </div>
  )
}
