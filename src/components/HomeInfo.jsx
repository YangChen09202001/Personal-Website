import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow}  className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I am <span className="font-semibold">Yang Chen</span> 😎
      <br />
      I am from UGA studying Computer Science.
    </h1>
  ),
  2: (
    <InfoBox text="I've always been drawn to problem-solving and logical thinking, which led me to pursue a career in computer science. I've worked on various projects, including software engineering, data analysis, and machine learning. " link="/about" btnText="Learn More" />
  ),
  3: (
    <InfoBox text="I have various experiences in web designing, backend, and database development, click the bottom to explore my projects." link="/project" btnText="Explore My Projects" />
  ),
  4: (
    <InfoBox text="Click the bottom to contact me " link="/contact" btnText="Contact Me" />
  ),
};

const HomeInfo = ({ currentStage }) => renderContent[currentStage] || null;

export default HomeInfo;
