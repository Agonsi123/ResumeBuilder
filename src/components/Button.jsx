import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button className='bg-gradient-to-r from-[#23e27c] to-[#1369b9] hover:bg-[#1369b9] text-white mb-4 w-[18.6rem] rounded w-full py-2' type='button' onClick={onClick}>
        {text}
    </button>
  )
}


export default Button
