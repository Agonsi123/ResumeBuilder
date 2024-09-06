import React from 'react'
import './Button.css'

const Button = ({text, onClick, className}) => {
  return (
    <div className='btn saveBtn'>
        <button type='button' onClick={onClick} className={className}>
            {text}
        </button>
    </div>
  )
}


export default Button