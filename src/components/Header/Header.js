import React from "react";
import utparlogo from '../../utparlogo.svg'
import dropdownIcon from '../../chevron-down.svg'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <div className="header-container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center',marginLeft: '60px',marginRight: '180px' }}>
                            <img
                                src={utparlogo}
                                height='80'
                                width='80'
                                alt=''
                                loading='lazy'
                                style={{marginTop: '-20px'}}
                            />
                            <div className="logoname-slogan">
                                <h3 style={{ color: '#4279A0', marginLeft: '10px', marginRight: '260px', fontSize: '3rem' }}>Utpar</h3>
                                <p>Accelerate Innovation</p>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/"><h4>Home</h4></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/services"><h4>Services</h4></a>
                                </li>
                                <li className="nav-item">
                                    <Dropdown className="dropdown-header">
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" as="a" className="nav-link">
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item href="#/action-1">Devops Consultancy</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Infra as code</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">CI/CD</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">Containerization and Orchestration</Dropdown.Item>
                                            <Dropdown.Item href="#/action-5">Security and Compliance</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/resources"><h4>Resources</h4></a>
                                </li>
                                <li className="nav-item">
                                    <Dropdown className="dropdown-header">
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" as="a" className="nav-link">
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/aboutus"><h4>About Us</h4></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/docs"><h4>Talk To Us</h4></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <div className="hd">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> */}
        </>
    );
};

export default Header;
