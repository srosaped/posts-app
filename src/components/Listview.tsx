import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Header from './Header';
import { Post } from '../models/post.model';




const Listview: React.FC = () => {

  const [posts, setPosts] = useState<Post[]>([{
    id: '',
    priority: '',
    title: '',
    body: '',
    date: ''
  }]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, []);


  const deletePost = (id: any) => {
    axios.delete(`http://localhost:3000/posts/${id}`)

    setPosts(posts.filter(post => post.id !== id))

  }

  const refreshPage = () => { 
    window.location.reload(); 
  }

  return (

    <>
      <Container className="posts-container">
        <div className="list">
          <div className="posts">
            <Header />

            {
              posts.map((post: Post) => (

                <div key={post.id} className="post-frame">
                  <div className='post-body'>
                    <Card className="mb-3">
                      <CardHeader>
                        <div className='priority-date'>
                          <div className='priority-wrapper'>
                            <div key={post.id} className='priority'>
                              <div>
                                {(() => {
                                  switch (post.priority) {
                                    case 'high':
                                      return <div className="red"></div>
                                    case 'medium':
                                      return <div className="yellow"></div>
                                    case 'low':
                                      return <div className="green"></div>
                                  }
                                })()}
                              </div>
                            </div>
                            <div className='date'>
                              {post.date}
                            </div>
                          </div>
                        </div>
                        <div className='title'>
                          {post.title}
                        </div>
                      </CardHeader>
                      <Card.Body>
                        <Card.Text>
                          {post.body}
                        </Card.Text>
                      </Card.Body>
                      <Card.Body className="post-edition">
                        <Card.Link onClick={() => deletePost(post.id)}><FontAwesomeIcon icon={faTrashCan} /></Card.Link>
                        <Link to={{ pathname: `/editpost/${post.id}` }}>
                          <FontAwesomeIcon icon={faPen} />
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))

            }
          </div>
        </div>
      </Container>
    </>
  );
}

export default Listview;