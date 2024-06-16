import Carousel from 'react-bootstrap/Carousel';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
function CaraouselSlide() {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src='https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_1280.jpg' alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>DevOps Consulting</h5>
          <p>Unlock the potential of your software development process and achieve greater
            efficiency, reliability, and innovation
            DevOps consulting is a collaborative approach to software development that combines
            the principles of development (Dev) and operations (Ops) to improve the speed, quality,
            and reliability of software releases.
            Our DevOps consulting services focus on integrating people, processes, tools, and
            technology to create a culture of continuous improvement and innovation which in turn
            accelerate software development lifecycle, improve collaboration, and improve time-to-
            market.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src='https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_1280.jpg' alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Our DevOps Consulting Services:</h5>
          <p>Assessment and Strategy: Using our proprietary framework, we conduct a thorough
            assessment of your current development process to baseline it, identifying areas for
            improvement and developing a customized strategy to achieve your business goals.
            Process Improvement: Our experts work with your team to implement process
            improvements, such as Agile methodologies, continuous integration, and continuous
            deployment.
            Toolchain Implementation: We help you select and implement the right tools for your
            DevOps journey, including version control systems, continuous integration platforms,
            and monitoring and logging tools.

            Training and Adoption: Our experts provide training and support to ensure a smooth
            transition to your new DevOps processes and tools.
            Ongoing Support: We offer ongoing support and maintenance to ensure the long-term
            success of your DevOps initiatives..</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src='https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_1280.jpg' alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Infra as Code (IaC)</h5>
          <p>UCS takes Infrastructure as Code (IaC, especially integrating it to Devops pipelines) to
            the next level to automate IT operations and transform the way you manage your
            infrastructure.
            We work with different tools and technologies to simplify and accelerate the IaC
            process. We have templates pre-built and pre-tested (especially for Devops), providing
            a solid foundation for your infrastructure configuration. With our templates, you can:
            Benefits(diagrams or tiles):
            - Reduce deployment time by up to 75%
            - Improve collaboration and version control
            - Track changes and roll back when needed
            - Provision and deploy infrastructure with ease
            - Ensure identical environments across Dev, QA, and Prod
            - Meet security and regulatory requirements
            IaC Services
            - IaC implementation and integration
            - Proprietary template development and customization
            - Infrastructure automation and orchestration
            - Training and support
            Get Started Today (button leading to Contact Us).</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src='https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_1280.jpg' alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Continuous Integration / Continuous Deployment (CI/CD)</h5>
          <p>Streamline and automate your build, test, and deployment processes with our expert
            Continuous Integration and Continuous Deployment solutions
            In today&#39;s fast-paced software development landscape, speed and efficiency are crucial.
            Our CI/CD services help you accelerate your development workflow, ensuring that your
            applications are delivered quickly and reliably. Our team of experts will work with you to
            design and implement customized Continuous Integration and Continuous Deployment
            pipelines, automating every stage of the process, from code commit to production
            deployment.
            Key features expected from our CI/CD solutions:
            - Automated build, test, and deployment processes
            - Continuous monitoring and feedback
            - Version control system integration (Git, SVN, etc.)
            - Support for various development tools and frameworks
            - Scalable and flexible infrastructure
            Benefits(diagrams or tiles) as observed by implementing our CI/CD solutions at various
            clients:
            - 20% Faster time-to-market for your applications
            - 10% Improved code quality and reduced errors
            - 20% Increased efficiency and productivity
            - Enhanced collaboration and communication among teams
            - 15% Reduced costs and improved resource allocation
            Our offerings in CI/CD include:
            - CI/CD Pipeline Design and Implementation
            - Integrated Automated Testing and Quality Assurance
            - Continuous Deployment and Monitoring
            - DevOps Consulting and Training
            Get Started Today (button leading to Contact Us).</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src='https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_1280.jpg' alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Containerization and Orchestration</h5>
          <p>Accelerate your application deployment, scaling, and management with our expert
            containerization and orchestration solutions.
            Containerization Services:
            - Containerize your applications with Docker, Kubernetes, or other containerization
            platforms

            - Improve application portability and reduce dependencies
            - Enhance security and isolation with container-level segmentation
            Orchestration Services:
            - Automate container deployment, scaling, and management with Kubernetes, Docker
            Swarm, or other orchestration tools
            - Ensure high availability and fault tolerance with automated fail-over and self-healing
            - Optimize resource utilization and reduce costs with efficient container scheduling
            Key Benefits (diagrams or tiles):
            - Faster application deployment and scaling
            - Improved application reliability and up-time
            - Easy to fix and test errors due to modularized and containerization approach
            - Increased efficiency and cost savings
            - Simplified application management and monitoring
            Get Started Today (button leading to Contact Us)</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src='https://t3.ftcdn.net/jpg/02/44/17/82/360_F_244178265_NP4S8WdlZRGYVSkVkxhtiDonSfQPAbyO.jpg' alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Security and Compliance</h5>
          <p>Security and compliance can&#39;t be an afterthought. Our security and compliance services
            help you build a secure and compliant DevOps pipeline, ensuring the integrity and
            confidentiality of your data while meeting regulatory requirements.
            Security and Compliance Services for DevOps:
            - Infrastructure as Code (IaC) security
            - Container security and orchestration
            - Cloud security and compliance
            - DevSecOps consulting and implementation
            - Compliance integration and automation
            Key Benefits:
            - Integrated security and compliance in your DevOps pipeline
            - Automated security and compliance testing
            - Continuous monitoring and vulnerability management
            - Improved incident response and threat hunting
            - Compliance with regulatory requirements
            - Reduced false positives

            Services:
            - DevSecOps Consulting and Implementation

            - Security Automation and Orchestration
            - Compliance Automation and Monitoring
            - Training and Education</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
}

export default CaraouselSlide;