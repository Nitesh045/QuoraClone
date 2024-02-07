import { Avatar, Button } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react';
import './Css/Post.css';

import ReactHtmlParser from "html-react-parser";
// import modal ...............................here
//import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';
// rect quill .........................................here
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="twitter" />
    </div>
  )
}

export const Post = ({ post }) => {
  const [isModelopen, setIsModalopen] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleQuill = (value) => {
    setAnswer(value);
  };
  console.log(answer);
  const handleAnswer = async () => {
    console.log(answer)
    if (post?._id && answer !== "") {
      // const config={
      //   headers:{
      //     "Content-Type":"application/json"
      //   }
      // }
      const body = {
        answerName: answer,
        questionId: post?._id
      }
      await axios.post('/answer', body).then((res) => {
        console.log(res.data);
        alert('added succesfullu')
        window.location.href = '/';
      }).catch((e) => {
        console.log(e);
      })
    }
  }

  // for url option end ....................here
  const Close = (<CloseIcon />)

  return (
    <div className='post'>
      <div className="post-info">
        <Avatar />
        <h4>User Name</h4>
        <small><LastSeen date={post?.createAt} /></small>
      </div>
      <div className="post-body">
        {/* answer body..............................................Answer body */}
        <p>{post?.questionName}</p>

        <Button onClick={() => setIsModalopen(true)}>Answer</Button>
      </div>
      <div>
        {post?.questionUrl !== "" && <img src={post.questionUrl} alt='imge' style={{ width: "100%", height: "200px" }} />}
      </div>
      <div className="post-footer">
        <div className="post-footerAction">
          <span className='span-icons'>
            <Button><ArrowUpwardIcon /><span>Upvote</span></Button>
            <Button><ArrowDownwardIcon /></Button>
          </span>
          <Button><RepeatIcon /></Button>
          <Button><ChatBubbleOutlineIcon /></Button>
        </div>

        <div className="post-footer-right">
          <Button><ShareIcon /></Button>
          <Button><MoreHorizIcon /></Button>
        </div>
      </div>
      <p className='answer-pop'>answer {post?.allAnswers?.length-1}</p>
      {
        post?.allAnswers?.map((answerPost) => {
      
        
          
            return (
              <div className="post-answer">
              <div className="post-container">
                <div className="post-answerd">
                  <Avatar />
                  <div className="post-answeInfo">
                    <p>user name</p>
                    <span><LastSeen date={answerPost?.createAt}/></span>
                  </div>
                </div>
                <div className="post-answerTest">

                  <p>{answerPost?.answerName}</p>
                </div>
              </div>
      </div>
            )
      })
}
      {/* modal adding here ........................MODAL */}

      <Modal open={isModelopen} closeIcon={Close} onClose={() => setIsModalopen(false)}
        closeOnOverlayClick={false} classNames='modal-style' >
        <div className="anser_modal">
          <div className="modal-question">
            <h2>{post?.questionName}</h2>
            <p>Asked by {''}<span>UserName</span>{new Date(post?.createAt).toLocaleString()}</p>
          </div>
          <div className="modal__answerQuill">
            <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter Your Answer' style={{ width: "90vb", height: "60vh" }} />
          </div>
          <div className="modal-btn">
            <Button onClick={handleAnswer}>Add Answer</Button>
            <Button onClick={() => setIsModalopen(false)}>Cancle</Button>
          </div>
        </div>

      </Modal>


    </div>
  )
}
