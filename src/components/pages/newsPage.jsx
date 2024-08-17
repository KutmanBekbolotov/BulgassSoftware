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
                            {news.map((item, index) => (
                                <div className="news_body_grid2 news_body_hover" key={index}>
                                    <p className="news_body_text2">{item.title}</p>
                                    <p className="news_body_text1">{new Date(item.pubDate).toLocaleString()}</p>
                                    <p className="read_more">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" >Читать далее</a>
                                    </p>
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
