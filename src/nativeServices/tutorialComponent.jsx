import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import solid from '../assets/videoCovers/ci.png';
import git from '../assets/videoCovers/git.png';
import ci from '../assets/videoCovers/k8s.jpg';
import k8s from '../assets/videoCovers/solid.jpg';
import typescript from '../assets/videoCovers/typescript.png';
import developer from '../assets/videoCovers/developer.png';

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
    <h3 style={{ color: 'white' }}>{title}</h3>
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
    {
      title: 'Что нужно знать о TypeScript',
      imageUrl: typescript,
      videoUrl: 'https://www.youtube.com/watch?v=9yZuZdWMDRI',
    },
    {
      title: 'Как стать разработчиком с нуля',
      imageUrl: developer,
      videoUrl: 'https://www.youtube.com/watch?v=9yZuZdWMDRI',
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
