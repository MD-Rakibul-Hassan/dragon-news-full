import { CiShare2 } from "react-icons/ci";
import { BsSave } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const NewsContainer = ({ news }) => {
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
	} = news;
	return (
		<div className="border-2 m-5 rounded-md">
			<div className="bg-slate-300 m-5 flex justify-between items-center px-5">
				<div className="flex gap-2 py-3 items-center">
					<img src={author.img} className="w-14 h-14 rounded-full" alt="" />
					<div className="flex flex-col">
						<span className="font-bold">{author.name}</span>
						<span className="text-slate-500">{author.published_date}</span>
					</div>
				</div>
				<div className="flex gap-2">
					<BsSave className="text-xl" />
					<CiShare2 className="text-xl" />
				</div>
			</div>
			<div className="px-6">
				<h1 className="font-bold text-slate-700 my-2">{title}</h1>
				<img src={image_url} className="w-full my-2" alt="" />
				<p className="my-2 text-slate-600 font-medium">
					{details.slice(0, 250)}
				</p>
				<Link to={`/details/${_id}`} className=" text-orange-500">
					Read More ...
				</Link>
			</div>
			<div className="border-t-2 flex justify-between py-4 px-5 my-4 mx-4">
				<div className="rating">
					{[...Array(5)].map((_, index) => {
						return (
							<input
								type="radio"
								name="rating-2"
								className={`mask mask-star-2 ${
									index < Number.parseInt(rating.number) ? "bg-orange-400" : ""
								}`}
							/>
						);
					})}
				</div>
				<div className="flex gap-2 items-center">
					<IoEyeOutline />
					<span>{total_view}</span>
				</div>
			</div>
		</div>
	);
};

export default NewsContainer;
