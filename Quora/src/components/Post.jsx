import { Avatar, Button } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react';
import './Css/Post.css';
// import modal ...............................here
//import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';
// rect quill .........................................here
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export const Post = (props) => {
  const [isModelopen, setIsModalopen] = useState(false);

  // for url option end ....................here
  const Close = (<CloseIcon />)

  return (
    <div className='post'>
      <div className="post-info">
        <Avatar />
        <h4>User Name</h4>
        <small>time</small>
      </div>
      <div className="post-body">
        {/* answer body..............................................Answer body */}
        <p>This is test quiestion</p>
        <Button onClick={() => setIsModalopen(true)}>Answer</Button>
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
      <p className='answer-pop'>
        1 Answer</p>
      <div className="post-answer">
        <div className="post-container">
          <div className="post-answerd">
            <Avatar />
            <div className="post-answeInfo">
              <p>user name</p>
              <span>time</span>
            </div>
          </div>
          <div className="post-answerTest">
            <p>Nitesh yadav</p>
          </div>
        </div>
      </div>
      {/* modal adding here ........................MODAL */}
      <div className="modal-style">
        <Modal open={isModelopen} closeIcon={Close} onClose={() => setIsModalopen(false)}
          closeOnOverlayClick={false} classNames='modal-style' >
          <div className="anser_modal">
            <div className="modal-question">
              <h2>This is test question</h2>
              <p>Asked by {''}<span>UserName</span>{''}onTime</p>
            </div>
            <div className="modal__answerQuill">
              <ReactQuill placeholder='Enter Your Answer' style={{ width: "90vb", height: "60vh" }} />
            </div>
            <div className="modal-btn">
              <Button>Add Answer</Button>
              <Button onClick={() => setIsModalopen(false)}>Cancle</Button>
            </div>
          </div>

        </Modal>
      </div>

    </div>
  )
}
