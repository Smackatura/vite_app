import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaMicrophoneAlt, FaPlay, FaStop, FaFileAudio, FaMusic, FaGuitar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Music Studio App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/recorder">
                        <FaMicrophoneAlt /> Recorder
                    </Link>
                    <Link className="nav-link" to="/player">
                        <FaPlay /> <FaStop /> Player
                    </Link>
                    <Link className="nav-link" to="/converter">
                        <FaFileAudio /> Converter
                    </Link>
                    <Link className="nav-link" to="/midi">
                        <FaMusic /> MIDI
                    </Link>
                    <Link className="nav-link" to="/tab">
                        <FaGuitar /> Tablature
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;