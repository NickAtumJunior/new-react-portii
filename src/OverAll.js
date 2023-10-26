import React from "react";
import { Col, Row } from "antd";
import humanimg from "./assests/Human-Image.png";
import exp from "./assests/Frame 1.svg";
const OverAll = () => {
  return (
    <div>
      {/* space for navbar */}
      {/* Welcome Page starts */}
      <Row>
        <Col
          xs={0}
          md={12}
          sm={0}
          style={{
            padding: "3em 3em",
          }}
        >
          <img src={humanimg} alt="cvbn" />
        </Col>
        <Col xs={24} md={12} sm={12} className="welcome-page-right">
          <h1>CODE ARTISAN</h1>
          <p>
            Welcome to my world of web and mobile development mastery. I'm a
            passionate web developer skilled in React, React Native, Node.js,
            and more. With a blend of creativity and precision, I create custom
            web and mobile solutions that transform ideas into engaging digital
            experiences. Explore my portfolio and discover how I can bring your
            vision to life. Let's embark on a journey to redefine the digital
            landscape together.
          </p>
          <Row>
            <button className="outlined-btn">Hire Me</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="outlined-btn-hover">Resume</button>
          </Row>
        </Col>
      </Row>
      {/* Welcome Page ends */}
      {/* Portfolio Page Starts Here */}
      <Row>
        <h1 className="exp-h1">Portfolio</h1>
        {/* First Portfolio */}
        <Row className="portfolio-wrapper">
          <Col className="portfolio-left" xs={24} sm={12} md={12}>
            <div>
              <h1>Tech Stack</h1>
              <p>
                React Native, Expo, Native Base, Node.js, Express js, Webpack,
                MySQL, Google Play, Gitlab
              </p>
            </div>
            <div>
              <h1>Duration</h1>
              <p>720 Hours</p>
            </div>
          </Col>
          <Col className="portfolio-right" xs={24} sm={12} md={12}>
            <h1>WMS Application</h1>
            <p>
              cutting-edge barcode application, redefining the way we handle
              data and inventory tracking. Our mission was to empower businesses
              with a powerful tool for precise barcode scanning, data
              collection, and real-time inventory management, all in one
              seamless package
            </p>
            <button className="outline-blue">Buy Application</button>
          </Col>
        </Row>
        {/* Second Portfolio */}
        <Row className="portfolio-wrapper">
          <Col className="portfolio-left" xs={24} sm={12} md={12}>
            <div>
              <h1>Tech Stack</h1>
              <p>
                React Native, Expo, Native Base, Node.js, Express js, Webpack,
                MySQL, Google Play, Gitlab
              </p>
            </div>
            <div>
              <h1>Duration</h1>
              <p>720 Hours</p>
            </div>
          </Col>
          <Col className="portfolio-right" xs={24} sm={12} md={12}>
            <h1>WMS Application</h1>
            <p>
              cutting-edge barcode application, redefining the way we handle
              data and inventory tracking. Our mission was to empower businesses
              with a powerful tool for precise barcode scanning, data
              collection, and real-time inventory management, all in one
              seamless package
            </p>
            <button className="outline-blue">Buy Application</button>
          </Col>
        </Row>
      </Row>
      {/* Portfolio Page Ends Here */}
      {/* About Page starts here */}
      <Row>
        <Col xs={24} sm={12} md={12} className="about-left">
          <h1>About Myself</h1>
          <p>
            Welcome to my world of web and mobile development mastery. I'm a
            passionate web developer skilled in React, React Native, Node.js,
            and more. With a blend of creativity and precision, I create custom
            web and mobile solutions that transform ideas into engaging digital
            experiences. Explore my portfolio and discover how I can bring your
            vision to life. Let's embark on a journey to redefine the digital
            landscape together.
          </p>
          <div className="small-box">
            <div>
              <h1>Ideas</h1>
              <p>76</p>
            </div>
            <div>
              <h1>Applications</h1>
              <p>23</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} className="about-right">
          <h1>Tech Stack</h1>
          <div>
            <ul className="linear-stack">
              <li>React</li>
              <li>React Native</li>
              <li>Expo</li>
            </ul>
            <ul className="linear-stack">
              <li>Node.js</li>
              <li>MUI</li>
              <li>Antd</li>
              <li>AOS</li>
            </ul>
            <ul className="linear-stack">
              <li>Express js</li>
              <li>Bootstrap</li>
              <li>GSAP</li>
            </ul>
            <ul className="linear-stack">
              <li>Redux</li>
              <li>Git</li>
              <li>Agile</li>
              <li>CSS3</li>
            </ul>
            <ul className="linear-stack">
              <li>Electron</li>
              <li>HTML</li>
              <li>Canvas</li>
            </ul>
            <ul className="linear-stack">
              <li>Custom Hooks</li>
              <li>jQuery</li>
            </ul>
            <ul className="linear-stack">
              <li>Presentation</li>
            </ul>
          </div>
        </Col>
      </Row>
      {/* About Page ends here */}
      {/* Experience page starte here */}
      <Row>
        <h1 className="exp-h1">Experience</h1>
        <img
          style={{
            width: "90%",
            position: "relative",
            left: "5%",
          }}
          src={exp}
          alt="Experiecne"
        />
      </Row>
      {/* Experience page ends here */}
      {/* Contact page goes here */}
      <Row style={{
        width:'90%',
        position:'relative',
      }}>
      {/* <h1 className="exp-h1">Contact Me</h1> */}
        <Col xs={24} md={12} sm={12} className="contact-left">
          <div className="form-input-wrapper">
            <span>FullName</span>
            <input />
          </div>
          <br/>
          <div className="form-input-wrapper">
            <span>Service Needed</span>
            <input />
          </div>
          <br/>
          <div className="form-input-wrapper">
            <span>Email</span>
            <input />
          </div>
          <br/>
          <div className="form-input-wrapper">
            <span>Message</span>
            <textarea cols={2} rows={5}/>
          </div>
          <br/>
          <button className="outlined-btn">Shoot Msg</button>
        </Col>
        <Col xs={24} md={12} sm={12} className="contact-right">
          <h1>Communication works for those who work at it.</h1>
          {/* <p>...John Powell</p> */}
          <div className="social-link">
            <a href="#">Github</a>
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
            <a href="#">Email</a>
          </div>
        </Col>
      </Row>
      {/* Contact page ends here */}
    </div>
  );
};

export default OverAll;
