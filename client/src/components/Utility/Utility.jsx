import React from 'react'
import './utility.css'

const Utility = () => {
  return (
    <div className='utility-container'>
        <div className="language-selector">
            <select name="language" id="language">
                <option value="-1">Choose a language</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="python">Pyhton</option>
                <option value="js">JavaScript</option>
            </select>
        </div>
    </div>
  )
}

export default Utility