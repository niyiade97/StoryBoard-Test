import React from 'react'

const Input = ({label, name, type, placeholder, onChange, value}) => {
  const handleChange = (e) =>{
    e.preventDefault();
    const {name, value} = e.target;
    onChange(name, value);
  }
  return (
    <div className='w-full pt-4'>
        <label className='text-sm font-medium text-color3 opacity-70'>{label}</label>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} className='w-full h-11 border border-color16 rounded placeholder-color17 pl-3 place text-sm text-color3'/>
    </div>
  )
}

export default Input