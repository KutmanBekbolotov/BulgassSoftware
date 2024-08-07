import React from 'react';
import { Helmet } from 'react-helmet';
import '../sidebar/sidebar';
import './seeMore.css';
import Sidebar from '../sidebar/sidebar';

function SeeMore() {
  return (
    <div className="SeeMore">
        <Sidebar/>
      <Helmet>
        <title>See More - Programming Courses</title>
      </Helmet>
      <header>
        <div className="header-text">
          <h1>Программирование</h1>
          <h3>Наши курсы</h3>
        </div>
      </header>
      <section className="courses">
        <div className="course">
          <h2>Основы программирования</h2>
          <p>
            Этот курс предназначен для начинающих, которые хотят изучить базовые концепции программирования. 
            Мы рассмотрим основные языки программирования, такие как Python, JavaScript и C++.
          </p>
        </div>
        <div className="course">
          <h2>Веб-разработка</h2>
          <p>
            На этом курсе вы изучите создание веб-сайтов и веб-приложений с использованием HTML, CSS и JavaScript. 
            Мы также рассмотрим фреймворки, такие как React и Vue.
          </p>
        </div>
        <div className="course">
          <h2>Мобильная разработка</h2>
          <p>
            Изучите основы разработки мобильных приложений для iOS и Android с использованием React Native и Flutter. 
            Научитесь создавать функциональные и удобные приложения.
          </p>
        </div>
        <div className="course">
          <h2>Искусственный интеллект и машинное обучение</h2>
          <p>
            Узнайте, как создавать модели машинного обучения и искусственного интеллекта с использованием Python и библиотек 
            таких как TensorFlow и PyTorch. Поймите основы анализа данных и работы с большими данными.
          </p>
        </div>
      </section>
      <footer>
        <div className="footer-text">
          <p>&copy; 2024 Bulgass IT-academy. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default SeeMore;
