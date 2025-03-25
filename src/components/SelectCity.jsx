import React, { useState } from 'react'
import './SelectCity.css'




//   const customStyles = {
//     control: (provided) => ({
//         ...provided,
//         width: "700px",
//         borderRadius: "8px",
//         boxShadow:"none",
//         textAlign: "left"
//     }),
//     options: (provided,state) => ({
//         ...provided,
//         color: "red",
//         backgroundColor: state.isSelected ? "lightgrey" : "white"
//     })
//   }
const SelectCity = () => {

    const [value, setValue] = useState("")

    const options = [
        { value: '180010', label: '福井' },
        { value: '090010', label: '宇都宮' },
        { value: 'charmander', label: 'ヒトカゲ' },
        { value: 'squirtle', label: 'ゼニガメ' },
      ];

      function handleSelect(event)  {
        setValue(event.target.value)
      }


  return (
    <div className='menu'>
        <select value={value} onChange={handleSelect}>
            {options.map(option => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
       
    </div>
  )
}

export default SelectCity