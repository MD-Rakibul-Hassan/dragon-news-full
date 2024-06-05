import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useContextData from "../../hook/useContextData";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import Navbar from "../../components/navbar/Navbar";

const Regester = () => {
	const [isShow, setIsShow] = useState(false);
	const { createUserByEmailPasssword } = useContextData();
	
    
    const handleRegesterSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.url.value;
        const password = e.target.password.value;
		const tarms = e.target.tarms.checked;
		
		if (!tarms) {
			Swal.fire({
				title: "Please Accept Our Tarms & Condition",
			}).then((result) => {
			});
		}

		createUserByEmailPasssword(email, password,tarms)
			.then(userCredintal => {
				const createdUser = userCredintal.user;
				updateProfile(createdUser, {
					displayName: name,
					photoURL:url
				})
					.then(() => {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Regestered successfully",
						showConfirmButton: false,
						timer: 3500,
					});
				})
			})
			.catch(error => {
			Swal.fire({
				icon: "error",
				title: 'Somthing Is Wrong',
				text: "Something went wrong!",
			});
		})
        e.target.reset()
    }


	return (
		<div>
			<Navbar />
			<form
				onSubmit={handleRegesterSubmit}
				className="lg:px-10 px-5 py-5 bg-slate-50 w-2/3 mx-auto lg:w-1/3 rounded-md mt-20 lg:mt-10"
			>
				<h1 className="my-4 text-center font-bold">Regester your account</h1>
				<Input
					style={`bg-slate-300 rounded-xl px-3 py-2 w-full mb-2 outline-0`}
					placeholder="Enter your name_"
					type="text"
					name="name"
				/>
				<Input
					style={`bg-slate-300 rounded-xl px-3 py-2 w-full mb-2 outline-0`}
					placeholder="Enter your email"
					type="email"
					name="email"
				/>
				<Input
					style={`bg-slate-300 rounded-xl px-3 py-2 w-full mb-2  outline-0`}
					placeholder="Enter your photo url"
					type="text"
					name="url"
				/>
				<div className="flex relative">
					<Input
						style={`bg-slate-300 rounded-xl px-3 py-2 w-full mb-2  outline-0`}
						placeholder="Enter your password"
						type={`${isShow ? "text" : "password"}`}
						name="password"
					/>
					<div
						onClick={() => setIsShow(!isShow)}
						className="absolute top-[12px] right-[10px]"
					>
						{isShow ? <FaEye /> : <FaEyeSlash />}
					</div>
				</div>
				<div className="flex gap-1 ">
					<Input type="checkbox" name="tarms" />
					<p className="text-[10px] lg:text-[16px]">Accept Term & Condition</p>
				</div>

				<div className="flex justify-center my-2">
					<Button
						txt="Regester"
						style="w-full bg-[#403F3F] text-white py-2 rounded-md"
					/>
				</div>
				<div>
					<p className="text-[14px]">
						Already Have An Account ?{" "}
						<span className="text-blue-500">
							{" "}
							<Link to="/login">Login</Link>
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Regester;
