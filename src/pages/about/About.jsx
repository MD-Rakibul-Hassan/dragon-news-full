import React from 'react'
import ScocalLogin from '../scocalLogin/ScocalLogin'
import logo from '../../assets/logo.png'
import Navbar from '../../components/navbar/Navbar';

const About = () => {
  return (
		<div className="lg:px-20 px-10">
			<div className="flex flex-col text-center justify-center items-center my-10">
				<img src={logo} className="w-[70vw] lg:w-[40vw]" alt="" />
				<p className="w-[50vw] text-sm lg:text-xl my-1 text-[#706F6F]">
					Journalism Without Fear or Favour
				</p>
				<p className="w-[50vw] text-sm lg:text-xl  text-[#706F6F]">
					<span>Sunday,November 27,2022</span>
				</p>
          </div>
          <div>
              <Navbar />
          </div>
			<div className="grid grid-cols-5 mt-28">
				<div className="col-span-5 lg:col-span-4">
					<div className="text-center lg:text-left  mx-auto w-full lg:px-20">
						<h1 className="text-2xl text-center font-semibold my-3 lg:text-5xl">
							Welocme to dragon news
						</h1>
						<p className='mt-10'>
							<span className="block text-xl text-left my-2">About Us</span>
							Welcome to Dragon news, your trusted source for the latest news
							and insights from around the world. Our mission is to keep you
							informed, engaged, and connected with the events and stories that
							matter most.
							<span className="block text-xl text-left my-2">Who we are</span>
							At Dragon news, we are a team of dedicated journalists, writers,
							and editors who are passionate about delivering high-quality news.
							With diverse backgrounds and expertise, our team is committed to
							providing accurate, timely, and comprehensive coverage of current
							events.
							<span className="block text-xl text-left my-2">Our vision</span>
							We believe in the power of information to shape communities and
							drive positive change. Our vision is to be a leading news platform
							where readers can rely on us for truthful reporting, in-depth
							analysis, and thought-provoking commentary. We strive to create a
							space where diverse voices are heard and important conversations
							are sparked.
							<span className="block text-xl text-left my-2">
								What we cover
							</span>
							From breaking news and politics to business, technology,
							entertainment, sports, and lifestyle, we cover a wide range of
							topics to cater to the varied interests of our readers. Our
							comprehensive coverage ensures that you stay up-to-date with the
							latest developments, both locally and globally.
							<span className="block text-xl text-left my-2">
								Our commitment
							</span>
							Integrity, transparency, and accountability are the core values
							that guide our work. We are committed to providing our readers
							with factual and unbiased news, free from sensationalism and
							misinformation. Our rigorous editorial standards ensure that every
							piece of content is thoroughly researched and verified before
							publication.
							<span className="block text-xl text-left my-2">
								Join our community
							</span>
							We invite you to join our growing community of informed and
							engaged readers. Subscribe to our newsletter, follow us on social
							media, and participate in the discussions on our articles. Your
							feedback and perspectives are invaluable to us as we continue to
							evolve and improve.
							<span className="block text-xl text-left my-2">Connect us</span>
							We love hearing from our readers. Whether you have a news tip, a
							question, or feedback, please feel free to get in touch with us.
							You can reach out to our team at <span className='text-blue-500 underline'>mdrakibulhassan2425@gmail.com</span> or through our
							contact form . Thank you for choosing  as your go-to source for news and information.
							Together, let's stay informed and connected.
						</p>
					</div>
				</div>
				<div className="col-span-5 lg:col-span-1">
					<ScocalLogin />
				</div>
			</div>
		</div>
	);
}

export default About
