import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import './newsPage.css';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://news.ycombinator.com/rss&api_key=ojchcskcaleqzlia9dgswc5i5qbftegvivn7d85h`);
                const data = await response.json();

                if (response.ok) {
                    const feedItems = data.items.map(item => ({
                        title: item.title,
                        link: item.link,
                        pubDate: item.pubDate,
                        description: item.description,
                    }));
                    setNews(feedItems);
                } else {
                    console.error('Ошибка при получении новостей:', data.message);
                }
            } catch (error) {
                console.error('Ошибка при получении новостей:', error);
            }
        };

        fetchNews();
    }, []);
    return (
        <>
            <div className="container">
                <Sidebar />
                <div className="news_container">
                    <div className="news_header">
                        <div className="news_header2">
                            <div>
                                <img className="header_img" src="https://logos-world.net/wp-content/uploads/2022/01/BBC-Logo.png" alt="BBC Logo" />
                            </div>
                            <div className="regis_voiti">
                                <div className="regis regvoi">Регистрация</div>
                                <div className="voiti regvoi">Войти</div>
                            </div>
                        </div>
                        <div className="bbc_img"><img className="bbc_img2" src="https://tpc.googlesyndication.com/simgad/10902681628556711741" alt="Advertisement" /></div>
                    </div>
                    <div className="news_body">
                        <div className="news_red_text">NEWS</div>
                        <div className="news_body_grid">
                            <div className="news_body_grid2 news_body_hover">
                                <img className="news_body_img" src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/d030/live/29de6920-556e-11ef-b2d2-cdb23d5d7c5b.jpg.webp" alt="" />
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
                            {news.map((item, index) => (
                                <div className="news_body_grid2 news_body_hover" key={index}>
                                    <img width={250} height={150} className="news_body_img2" src={"https://via.placeholder.com/250"} alt={item.title} />
                                    <p className="news_body_text4">{item.title}</p>
                                    <p className="news_body_text2">{item.description}</p>
                                    <p className="news_body_text3">{new Date(item.pubDate).toLocaleString()}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="read_more">Читать далее</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsPage;
