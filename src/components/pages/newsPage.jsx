import React from "react";
import Sidebar from "../sidebar/sidebar";
import './newsPage.css';

const NewsPage = () =>{
    return(
        <>
            <div className="container">
                <Sidebar/>
                <div className="news_container">
                   <div className="news_header">
                         <div className="news_header2">   
                            <div>
                                <img className="header_img" src="https://logos-world.net/wp-content/uploads/2022/01/BBC-Logo.png" alt="" />
                            </div>
                            <div className="regis_voiti">
                                <div className="regis regvoi">Регистрация</div>
                                <div className="voiti regvoi">Войти</div>
                            </div>
                        </div>
                        <div className="bbc_img"><img className="bbc_img2" src="https://tpc.googlesyndication.com/simgad/10902681628556711741" alt="" /></div>
                   </div>
                   <div className="news_body">
                        <div className="news_red_text">NEWS</div>
                        <div className="news_body_grid">
                            <div className="news_body_grid2 news_body_hover">
                                <img width={500} className="news_body_img" src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/d030/live/29de6920-556e-11ef-b2d2-cdb23d5d7c5b.jpg.webp" alt="" />
                                <p  className="news_body_text">Стив Розенберг: вторжение Украины показывает, что война России не идет по плану</p >
                                <p  className="news_body_text2">Атака на «Курск» побудила некоторых россиян призвать к более масштабному военному наступлению на Украину.</p >
                                <p  className="news_body_text3">6 часов назад | Европа</p >
                            </div>
                            <div className="news_body_grid2 news_body_hover">
                                <img width={250} height={150} className="news_body_img2" src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/09db/live/c481eed0-557c-11ef-aebc-6de4d31bf5cd.jpg.webp" alt="" />
                                <p className="news_body_text4">Юнус принял присягу в качестве временного лидера Бангладеш</p>
                                <p className="news_body_text2">84-летний лауреат Нобелевской премии был выбран лидерами студенческого протеста после того, как шейх Хасина бежала из страны.</p >
                                <p  className="news_body_text3">2 часа назад | Азия</p >
                                <p  className="news_body_text4 none">Он новый вице-президент. Для своих студентов он мистер Вальц</p >
                                <p  className="news_body_text2 none">Напарник Камалы Харрис преподавал в средней школе, и те, кого он учил, говорят, что он был «талантливым педагогом».</p >
                                <p  className="news_body_text3 none">1 час назад | США и Канада</p >
                            </div>
                            <div className="news_body_grid2 news_body_hover">
                                <div>
                                    <img width={250} height={150} className="news_body_img2" src="https://ichef.bbci.co.uk/news/800/cpsprodpb/5145/live/55411880-550d-11ef-8d46-cfcfee8fdded.jpg.webp" alt="" />
                                    <p className="news_body_text3 text5">17 часов назад | Новости</p>
                                </div>
                                <div>
                                    <p className="news_body_text4 text5">Прыжок в воду ради олимпийской славы после травмы, угрожающей карьере</p>
                                    <p className="news_body_text2 text5">Дайвер сборной Великобритании Кайл Котари готовится побороться за золото, но его путь был далеко не простым.</p>
                                </div>
                            </div>
                            <div className="news_body_grid2 news_body_hover">
                                <img height={150} width={250} className="news_body_img2"  src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/c03d/live/f44e6470-562d-11ef-b2d2-cdb23d5d7c5b.jpg.webp" alt="" />
                                <p className="news_body_text4 text5">Решающий поединок намечен: Трамп и Харрис планируют провести дебаты в сентябре. Кэти Прайс арестована в аэропорту Хитроу после неявки в суд</p>
                                <div>
                                    <p className="news_body_text2 text5">Дебаты на канале ABC News станут первым противостоянием соперников с тех пор, как г-жа Харрис  от Демократической партии.</p>
                                    <p className="news_body_text3 text5">6 часов назад | США и Канада</p>
                                </div>
                            </div>
                            <div className="news_body_grid2 news_body_hover">
                                <img width={250} height={150} className="news_body_img2" src="https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/0894/live/838e9ae0-4b2c-11ef-aebc-6de4d31bf5cd.jpg.webp" alt="" />
                                <p className="news_body_text4 text5">Медальная таблица Париж 2024</p>
                                <p className="news_body_text3 text5">Ознакомьтесь с последней таблицей медального зачета Олимпиады в Париже.</p>
                                <p className="news_body_text4 text5">Что говорит нам наука о гендерном неравенстве в боксе?</p>
                                <p className="news_body_text3 text5">Исследования проливают свет на различные хромосомные наборы и на то, какие преимущества они могут дать спорту.</p>
                            </div>
                            <div className="news_body_grid2 news_body_hover">
                                <img width={503} className="news_body_img" src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/4e43/live/a4448150-55d6-11ef-81f2-d36891a35222.jpg.webp" alt="" />
                                <p className="news_body_text">Израиль принимает предложение принять участие в «срочных» новых переговорах о прекращении огня</p>
                                <p className="news_body_text2">Предложение о проведении нового раунда переговоров 15 августа представили США, Египет и Катар.</p>
                                <p className="news_body_text3">2 часа назад | Средний Восток</p>
                            </div>
                            <div className="news_body_grid2 news_body_hover">
                                <img width={250} height={150} className="news_body_img2" src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/7eb2/live/a2eca890-55cd-11ef-8d7b-45dc5b1bd97e.jpg.webp" alt="" />
                                <p className="news_body_text4 text5">Почему аллигатор перебежал дорогу? Виноват тропический шторм Дебби</p>
                                <p className="news_body_text2 text5"> Пока на юге США идут дожди, аллигаторы и сомы исследуют новые водоемы — от луж до дворовых бассейнов.</p>
                                <p className="news_body_text3 text5">19 часов назад | США и Канада</p>
                            </div>
                            <div className="news_body_grid2 news_body_hover">
                                <img width={250} height={150} className="news_body_img2" src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/fba6/live/967fa730-5652-11ef-8177-3703f85c53e5.jpg.webp" alt="" />
                                <p className="news_body_text4 text5">Карсли назначен временным тренером сборной Англии</p>
                                <p className="news_body_text2 text5">Ли Карсли назначен временным тренером сборной Англии на предстоящие игры Лиги наций, пока продолжаются поиски преемника Гарета Саутгейта.</p>
                                <p className="news_body_text3 text5">3 часа назад | Англия Мужчины</p>
                            </div>
                            <div className="news_body_grid2 news_body_hover">
                                <p className="news_body_text4 text5">Еженедельная викторина: Какая страна завоевала свою первую олимпийскую медаль в беге на 100 метров?</p>
                                <p className="news_body_text2 text5">Проверьте, насколько внимательно вы следили за событиями за последние семь дней.</p>
                                <p className="news_body_text3 text5">1 день назад | Мир</p>
                                <img width={250} height={150} className="news_body_img2"  src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/11B68/production/_133525527_8321c7ff-8c07-4645-a866-0657973cf183.jpg.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
 
export default NewsPage;
