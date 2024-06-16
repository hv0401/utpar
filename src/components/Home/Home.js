import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from "reactstrap";
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="container-top">
                <h1 className="welcome-text">Welcome to Utpar Consultancy Services (UCS)</h1>
                <h2>where innovation meets efficiency.</h2>
                <Button><h4>Talk To Us</h4></Button>
                <br /><br /><br />
                <h5>TRUSTED BY</h5>
            </div>
            <div className="trustedContainer">
                <h3>Cognicsys</h3>
                <h3>Kosh.ai</h3>
            </div>
            <div className="helpContainer">
                <h3>How we can help you</h3>
                <Button><h4>Talk To Us</h4></Button>
                <div class="ticker-container">
                    <div class="ticker">
                        <h4>Ansible + Terraform + Jenkins + Azure + AWS Code Pipelines + GitLab + GitHub + Bitbucket + CodeCov + Sonarqube + sfdx + Docker + K8s + Prometheus + Grafana + JIRA + Codacy + Prisma + CircleCI + JFrog + Artifactory +
                            Octopus Deploy + HELM charts + Docker compose + VMware + Codeshare + Ansible + Terraform + Jenkins + Azure + AWS Code Pipelines + GitLab + GitHub + Bitbucket + CodeCov + Sonarqube + sfdx + Docker + K8s + Prometheus + Grafana + JIRA + Codacy + Prisma + CircleCI + JFrog + Artifactory +
                            Octopus Deploy + HELM charts + Docker compose + VMware + Codeshare</h4>
                    </div>
                </div>
            </div>
            <div className="getStartedContainer">
                <div className="clildGetStart">
                    <h1>Get Started</h1>
                    <Button><h4>Talk To Us</h4></Button>
                </div>
                <div>
                    <img style={{ width: '600pxpx', height: '400px' }}
                        src="https://creativitysp.files.wordpress.com/2022/09/power-bi-for-azure-devops-img1.png?w=1024"
                    />
                </div>
            </div>
        </>
    );
}
export default Home;