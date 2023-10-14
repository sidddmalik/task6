import React from 'react';
import './App.css'; // Import the CSS file for styling

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Shreyash Joshi</h1>
        <p>+91 7838549552 | shreyashjoshi3002@gmail.com</p>
      </header>

      <section className="education">
        <h2>EDUCATION</h2>
        <ul>
          <li>
            VELLORE INSTITUTE OF TECHNOLOGY
            <ul>
              <li>Btech in Computer Science</li>
              <li>Chennai, Tamil Nadu</li>
              <li>College of Engineering</li>
              <li>CGPA: 8.53</li>
            </ul>
          </li>
          <br/>
          <li>
            SETH ANANDRAM JAIPURIA SCHOOL (CLASS XII)
            <ul>
              <li>Percentage: 93.6%</li>
              <li>Uttar Pradesh, India</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="education">
        <h2>COURSEWORK</h2>
        <h3>UG</h3>
            <ul>
              <li>Data Structure and Algorithms</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Software Engineering</li>
              <li>Operating System</li>
              <li>Database Management System</li>
              <li>Compiler Design</li>
              <li>Information Security Analysis and Audit</li>
              <li>Computer Architecture and Organization</li>
              <li>Computer Networks</li>
            </ul>
      </section>
      <section className="education">
        <h2>Area of Intrest</h2>
            <ul>
              <li>Data Science</li>
              <li>Networking/Cyber-Sec.</li>
              <li>App Development</li>
              <li>UI-UX</li>
              <li>Full-Stack(FrontEnd & BackEnd)</li> 
            </ul>
      </section>
      <section className="education">
        <h2>SKILLS</h2>
            <ul>
              <li>Java</li>
              <li>C,C++</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>Html , Css</li>
              <li>postgre sql </li>
              <li>React,MongoDB,node,Angular,Express</li>
            </ul>
        <section className="education">
        <h2>CERTIFICATIONS</h2>
            <ul>
              <li>AWS Educate Cloud Computing</li>
              <li>Creating SmartChat BOT</li>
              <li>Realtime image through Voice using AI models </li>
            </ul>
          
      </section>
      </section>
      <section className="education">
        <h2>Hobbies</h2>
            <ul>
              <li>Excercise</li>
              <li>Games</li>
              <li>Music</li>
              <li>Travelling</li>
              <li>Cooking</li>
              
            </ul>
      </section>
      <section className="education">
        <h2>Languages Known</h2>
            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>Japanese</li>
            </ul>
      </section>
      <section className="links">
        <h2>LINKS</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/shreyash-joshi-1166b0220/">LinkedIn</a></li>
          <li><a href="https://github.com/Godfathxx">Github</a></li>
        </ul>
      </section>
    

      {/* Add sections for COURSEWORK, SKILLS, PROJECTS, CERTIFICATIONS, and POSITION OF RESPONSIBILITY */}
    </div>
  );
};

export default Portfolio;