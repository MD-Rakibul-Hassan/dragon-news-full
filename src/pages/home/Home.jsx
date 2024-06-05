import React from "react";
import Navbar from "../../components/navbar/Navbar";
import logo from '../../assets/logo.png'
import Button from "../../components/button/Button";
import HomeContent from "./HomeContent";

const Home = () => {

	return (
		<div className="lg:px-20">
			<div className="flex flex-col text-center justify-center items-center my-5">
				<img src={logo} className="w-[70vw] lg:w-[40vw]" alt="" />
				<p className="w-[50vw] text-sm lg:text-xl my-1 text-[#706F6F]">
					Journalism Without Fear or Favour
				</p>
				<p className="w-[50vw] text-sm lg:text-xl  text-[#706F6F]">
					<span>Sunday,November 27,2022</span>
				</p>
			</div>
			<div className="bg-slate-200 py-2 flex gap-2 px-4 items-center">
				<Button txt="Latest" style="bg-[#D72050] px-4 text-white  py-2" />
				<marquee className="text-md">
					Match Highlights: Germany vs Spain — as it happened ! Match
					Highlights: Germany vs Spain as...
				</marquee>
            </div>
			<Navbar />
            <HomeContent />
		</div>
	);
};

export default Home;
