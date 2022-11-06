import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Utility from '../../components/Utility/Utility'
import './compiler.css'

const Compiler = () => {
  return (
        <div className='compiler-container'>
            <Navbar />
            <div className="functionalPart">
                <div className="compiler-leftPart">
                    <Utility />
                </div>
                <div className="compiler-rightPart"></div>
            </div>
        </div>
  )
}

export default Compiler