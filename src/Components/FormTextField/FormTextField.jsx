import React from 'react'
import './FormTextField.scss'

export const FormTextField = (props) => {
    return (
        <div className = 'row'>
            <input 
                type={props.type} 
                className='textField browser-default' 
                name={props.name} 
                placeholder={props.placeholder} 
                onChange = {(e) => props.onChange(e.target.value)}>
            </input>  
        </div>
    )
}