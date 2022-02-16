import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPlus, faMinus, faPen } from '@fortawesome/free-solid-svg-icons'

function Listview() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <Container>
      <div className='title'>
        <h1 className='w-100'>Posts</h1>
        <Button  ><FontAwesomeIcon icon={faPlus} /></Button>
      </div>
      <div className="list">
        <div className="posts">

          {
            posts.map((post: { id: number, title: string, body: string }) => (

              <div key={post.id} className="post-frame">
                <div className='post-body'>
                  <h2 className="post-title"><FontAwesomeIcon icon={faCommentDots} /> {post.title}</h2>
                  <p className='post-text'>{post.body}</p>
                  <div className='post-edition'>
                  <a href="http://"><FontAwesomeIcon icon={faMinus} /></a>
                    <a href="http://"><FontAwesomeIcon icon={faPen} /></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
}



export default Listview;