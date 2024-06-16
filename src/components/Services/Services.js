import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Services.css'
import Carousel from "../Thirdparty/CaraouselSlide";
import CaraouselSlide from "../Thirdparty/CaraouselSlide";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Services = () => {
    const link1 = "https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg"
    return (
        <>
            <div className="container">
                <h1>Let's build the future by accelerating innovation.</h1>
                <Button><h4>Talk To Us</h4></Button>
            </div>
            <div className="image-text-container">
                <img style={{ width: '600pxpx', height: '240px', paddingRight: '220px' }}
                    src="https://motifworks.blob.core.windows.net/media/2022/04/MW-POD-devops-2022.jpg"
                />
                <div className="text-container">
                    <h5>DevOps Consulting</h5>
                    <Button className="read-button">Read More</Button>
                </div>
            </div>
            <div className="image-text-container">
                <div className="text-container">
                    <h5>Infra as Code</h5>
                    <Button className="read-button">Read More</Button>
                </div>
                <img style={{ width: '600pxpx', height: '240px', paddingLeft: '220px' }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAGpkCHG7aVt1kGFDjQl4cUEGaK27r6kYpdjOMbJ0zQ&s"
                />
            </div>
            <div className="image-text-container">
                <img style={{ width: '600pxpx', height: '240px', paddingRight: '220px' }}
                    src="https://motifworks.blob.core.windows.net/media/2022/04/MW-POD-devops-2022.jpg"
                />
                <div className="text-container">
                    <h5>CI/CD</h5>
                    <Button className="read-button">Read More</Button>
                </div>
            </div>
            <div className="image-text-container">
                <div className="text-container">
                    <h5>Containerization and Orchestration</h5>
                    <Button className="read-button">Read More</Button>
                </div>
                <img style={{ width: '600pxpx', height: '240px', paddingLeft: '220px' }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAGpkCHG7aVt1kGFDjQl4cUEGaK27r6kYpdjOMbJ0zQ&s"
                />
            </div>
            <div className="image-text-container">
                <img style={{ width: '600pxpx', height: '240px', paddingRight: '220px' }}
                    src="https://motifworks.blob.core.windows.net/media/2022/04/MW-POD-devops-2022.jpg"
                />
                <div className="text-container">
                    <h5>
                        Security and Compliance
                    </h5>
                    <Button className="read-button">Read More</Button>
                </div>
            </div>
        </>
    );
}
export default Services;