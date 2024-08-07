import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import solid from '../assets/solid.jpg';
import git from '../assets/git.png';
import ci from '../assets/ci.png';
import k8s from '../assets/k8s.jpg';

const Tutorial = ({ title, imageUrl, videoUrl }) => (
  <div style={{ margin: '20px', textAlign: 'center' }}>
    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: '300px',          
          height: '200px',         
          objectFit: 'cover',      
          borderRadius: '8px',
          marginBottom: '10px'
        }}
      />
    </a>
    <h3>{title}</h3>
  </div>
);

const TutorialComponent = () => {
  
  const videos = [
    {
      title: 'Все о принципах SOLID',
      imageUrl: solid,
      videoUrl: 'https://www.youtube.com/watch?v=yeYRAXsUrow',
    },
    {
      title: 'Git и GitHub для новичков',
      imageUrl: git,
      videoUrl: 'https://www.youtube.com/watch?v=EeARyFrZsnU',
    },
    {
        title: 'Про CI/CD за 5 минут',
        imageUrl: ci,
        videoUrl: 'https://www.youtube.com/watch?v=Y-hYifHkjMs',
    },
    {
        title: 'Что такое Kubernetes',
        imageUrl: k8s,
        videoUrl: 'https://www.youtube.com/watch?v=klmpiHLSuXA',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Sidebar/>
      {videos.map((video, index) => (
        <Tutorial key={index} {...video} />
      ))}
    </div>
  );
};

export default TutorialComponent;
