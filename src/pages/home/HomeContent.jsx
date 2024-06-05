import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import initalData from "../../data/AllCaterogyData";
import NewsContainer from "./NewsContainer";
import ScocalLogin from "../scocalLogin/ScocalLogin";
const HomeContent = () => {
	const [allNews, setAllNews] = useState([]);
	const [filteredNews, setFilterNews] = useState(initalData);
	
	

	useEffect(() => {
		fetch("/news.json")
		.then((response) => response.json())
		.then((data) => {
			setAllNews(data);
		})
		.catch((error) => console.log(error));
		
	}, []);

	const AllNewsHandlar = () => {
		setFilterNews(allNews)
	}
	const BreakingNewsHandlar = () => {
		const breakingNews = allNews.filter((news) => news.category_id === '1');
		setFilterNews(breakingNews)
	};
	const RegularNewsHandlar = () => {
		const regularNews = allNews.filter((news) => news.category_id === "2");
		setFilterNews(regularNews);
	};
	const InternationalNewsHandlar = () => {
		const internationalNews = allNews.filter((news) => news.category_id === '3');
		setFilterNews(internationalNews);
	};
	const SportsNewsHandlar = () => {
		const sportNews = allNews.filter(
			(news) => news.category_id === "4"
		);
		setFilterNews(sportNews);
	};
	const EntertainmentNewsHandlar = () => {
		const entertainmentNews = allNews.filter((news) => news.category_id === "5");
		setFilterNews(entertainmentNews);
	};
	const CultureNewsHandlar = () => {
		const culturelNews = allNews.filter(
			(news) => news.category_id === "5"
		);
		setFilterNews(culturelNews);
	};

	const AllNewsCaterogy = [
		{ title: "All News", handlar: AllNewsHandlar },
		{ title: "Breaking News", handlar: BreakingNewsHandlar },
		{ title: "Regular News", handlar: RegularNewsHandlar },
		{ title: "International News", handlar: InternationalNewsHandlar },
		{ title: "Sports", handlar: SportsNewsHandlar },
		{ title: "Entertainment", handlar: EntertainmentNewsHandlar },
		{ title: "Culture", handlar: CultureNewsHandlar },
	];

	return (
		<div className="grid md:grid-cols-3 lg:grid-cols-6 h-screen px-5">
			<div className="lg:col-span-1  ">
				<h1 className="my-4 text-xl font-bold">All Caterogy Of News</h1>
				{AllNewsCaterogy.map((news, index) => (
					<Button
						key={index}
						onClick={news.handlar}
						txt={news.title}
						style="block my-2"
					/>
				))}
			</div>
			<div className=" lg:col-span-4 ">
				{filteredNews
					? filteredNews.map((news) => {
							return <NewsContainer key={news._id} news={news} />;
					  })
					: allNews.map((news) => {
							return <NewsContainer key={news._id} news={news} />;
					  })}
			</div>
			<div className=" lg:col-span-1 hidden lg:block ">
				<ScocalLogin />
			</div>
		</div>
	);
};

export default HomeContent;
