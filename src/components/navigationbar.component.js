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
                            'margin': '1.5em',
                            'border-bottom': '5px #dedede solid'}}
                 >
                    <Navbar.Brand>
                        <Nav.Link href='/'>
                            <Image src={profile} roundedCircle style={{'height':'5em'}}/>
                        </Nav.Link>
                    </Navbar.Brand>

                    <Nav style={{'font-size':'1.2em', 'font-color':'black'}}>
                        <Nav.Link href='/construction'> About </Nav.Link>
                        <Nav.Link href='/construction'> Blog </Nav.Link>
                        <Nav.Link href='/construction'> Contact </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}