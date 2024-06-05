import { CgMenuLeft } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useContextData from "../../hook/useContextData";
import userPng from '../../assets/user.png'

const Navbar = () => {
	const { user, logOutUser } = useContextData();
	

	const [isToggle, setIsToggle] = useState(false);
	const handleToggle = () => {
		setIsToggle(!isToggle);
	};

	const handleLogOut = () => {
		logOutUser()
			.then(() => {
			
		})
	}

	return (
		<nav className="flex justify-between  px-5 py-5">
			<div></div>
			<div
				className={`${
					isToggle
						? "flex absolute flex-col bg-slate-600 w-full text-center py-5 top-[260px] left-0 h-1/2 justify-center z-10  px-5"
						: "hidden"
				} lg:flex gap-5`}
			>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? " border-2 px-5 py-3 rounded-xl" : "px-5 py-3 "
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive ? " border-2 px-5 py-3 rounded-xl" : "px-5 py-3 lg:hidden "
					}
				>
					Login
				</NavLink>

				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? " border-2 px-5 py-3 rounded-xl" : "px-5 py-3 "
					}
				>
					About
				</NavLink>

				<NavLink
					to="/career"
					className={({ isActive }) =>
						isActive ? " border-2 px-5 py-3 rounded-xl" : "px-5 py-3 "
					}
				>
					Career
				</NavLink>
			</div>
			<div className="lg:flex flex  absolute lg:static lg:top-0 lg:left-0 lg:flex-row-reverse items-center gap-5">
				{user ? (
					<button
						onClick={handleLogOut}
						className="bg-[#403F3F] px-4 py-2 rounded-xl text-white cursor-pointer"
					>
						LogOut
					</button>
				) : (
					<div className="hidden lg:flex">
						<Link
							className="bg-[#403F3F] px-4 py-2 rounded-xl text-white cursor-pointer"
							to="/login"
						>
							Login
						</Link>
					</div>
				)}
				{user && (
					<img className="w-7 h-7   rounded-full" src={userPng} alt="" />
				)}
			</div>
			<div
				className={`lg:hidden text-3xl z-50 `}
				onClick={handleToggle}
			>
				{isToggle ? <RxCross1 /> : <CgMenuLeft />}
			</div>
		</nav>
	);
};

export default Navbar;
