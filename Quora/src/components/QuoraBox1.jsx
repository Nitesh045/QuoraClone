import { Avatar } from '@mui/material'
import React from 'react'
import './Css/Feed.css'

export const QuoraBox1 = () => {
  return (
    <div className='quoraBox'>
        <div className="quoraBoxInfo">
            <Avatar/>
        </div>

        <div className="inputBox">
            <input type='text' placeholder='What do you want to ask or Share'/>
        </div>

    </div>
  )
}
