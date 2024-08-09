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
          <h2>Bulgass courses</h2>
          <h4>Какие направления мы изучаем</h4>
        </div>
      </header>
      <section className="courses">
        <div className="course">
          <h2>BS-50</h2>
          <p>
            Курс по основам программирования, где мы затрагиваем основы всех направлений.<br/>
            Длительность: 12 недель.<br/>
            Языки программирования: C++, JavaScript(HTML, CSS), C#(Unity).<br/>
            Направления: Основы Computer Since, Web-разработка, Разработка игр, Системное администрирование.
          </p>
        </div>
        <div className="course">
          <h2>BS-60</h2>
          <p>
            Вводный курс по разработке игр.
          </p>
        </div>
        <div className="course">
          <h2>BS-61</h2>
          <p>
            Продвинутый курс по разработке игр.
          </p>
        </div>
        <div className="course">
          <h2>BS-70</h2>
          <p>
            Вводный курс в web-разработку.<br/>
            Длительность: 12 недель.<br/>
            Языки программирования: JavaScript(HTML, CSS), Введение в React.<br/>
          </p>
        </div>
        <div className="course">
          <h2>BS-71</h2>
          <p>
            Продвинутый курс по web-разработке.<br/>
            Длительность: 25 недель.<br/>
            Языки программирования: JavaScript(React, Nodejs), PHP(Laravel), SQL(MySql, PostgeSQL).<br/>
            Инструменты разработки: Docker, Kubernetes, Git(GitHub/GitLab).
          </p>
        </div>
        <div className="course">
          <h2>BS-80</h2>
          <p>
            Курс по операционным системам.<br/>
            Длительность: 48 недель.<br/>
            Языки программирования: C/C++, Java.<br/>
            На курсе изучается: Алгоритмы и структуры данных, низкоуровневое программирование, виртуализация и аркестрация систем, управление системами BIOS.<br/>
            Инструменты разработки: Docker, Kubernetes, Google VM, SQl.
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
