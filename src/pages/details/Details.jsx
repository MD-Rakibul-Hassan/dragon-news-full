
import React, { useEffect, useState } from 'react'
import ScocalLogin from '../scocalLogin/ScocalLogin'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import logo from '../../assets/logo.png'

const Details = () => {
  const __id = useParams();
  const { id } = __id;


  const [allnews, setAllNews] = useState([])
  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => {
        setAllNews(data);
        setLoading(false)
      })
      .catch(error => console.log(error.message))
  }, [])
  
  const detailNews = allnews.filter(news => news._id == id);


  return (
		<div>
			<div>
				<div className="flex flex-col text-center justify-center items-center my-5">
					<img src={logo} className="w-[70vw] lg:w-[40vw]" alt="" />
					<p className="w-[50vw] text-sm lg:text-xl my-1 text-[#706F6F]">
						Journalism Without Fear or Favour
					</p>
					<p className="w-[50vw] text-sm lg:text-xl  text-[#706F6F]">
						<span>Sunday,November 27,2022</span>
					</p>
				</div>
			</div>
			<div className="mt-10">
				<Navbar />
			</div>
			<div className="grid grid-cols-5 gap-4 lg:px-10 my-20">
				<div className=" col-span-5 lg:col-span-4 px-10 lg:px-20">
					{detailNews.map((detail) => {
						const {
							_id,
							author,
							category_id,
							details,
							image_url,
							others_info,
							rating,
							thumbnail_url,
							title,
							total_view,
						} = detail;
						return (
							<div >
								<img src={image_url} className="w-full" alt="" />
								<h1 className="my-2 font-bold text-xl">{title}</h1>
								<p className="text-slate-500 my-2">{details}</p>
							</div>
						);
					})}
				</div>
				<div className=" col-span-5 lg:col-span-1 px-10">
					<ScocalLogin />
				</div>
			</div>
		</div>
	);
}

export default Details
