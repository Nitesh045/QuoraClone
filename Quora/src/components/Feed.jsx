import React, { useEffect, useState } from 'react'
import { QuoraBox1 } from './QuoraBox1'
import { Post } from './Post'
import axios from 'axios'

export const Feed = () => {
  const [posts,setposts]=useState([])
  useEffect(()=>{
   axios.get('/question').then((res)=>{
       setposts(res.data);
     console.log(res.data);
   }) .catch((e)=>{
    console.log(e)
   });
   
  },[])
  return (
    <div>
      <div><QuoraBox1/></div>
      {
        posts.map((post)=>(<Post post={post}/>))
      }
      
    </div>

  )
}
