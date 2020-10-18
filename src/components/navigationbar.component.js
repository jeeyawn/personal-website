import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import profile from '../img/profile.png';
import Image from 'react-bootstrap/Image';

export default class NavigationBar extends Component {
    render() {
        return (
            <div className='App'>
                <Navbar 
                    style={{'flexDirection': 'row', 
                            'justifyContent':'space-between',
                            'padding':'2em',
                            'border-bottom': '2px #dedede solid'}}
                 >
                    <Navbar.Brand>
                        <Image src={profile} roundedCircle fluid style={{'height':'4em'}}/>
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link> About </Nav.Link>
                        <Nav.Link> Blog </Nav.Link>
                        <Nav.Link> Contact </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}