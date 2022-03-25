import * as React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';

import { Link, Router } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <h1>Posts</h1>
                    </Navbar.Brand>
                    <Link to="/addpost">
                        <Button className='header-btn' >
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                    </Link>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
