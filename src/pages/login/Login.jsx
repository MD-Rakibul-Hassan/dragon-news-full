import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useContextData from "../../hook/useContextData";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
	const location = useLocation();
	console.log(location)


	const navigate = useNavigate()
	const [isShow, setIsShow] = useState(false);
	const { loginUserByEmailPassword, forgetPassword, loginWithGoogle } =
		useContextData();
	const emailRef = useRef()
	
	const handleLoginUser = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		loginUserByEmailPassword(email, password)
			.then(user => {
			 navigate(location.state ? location.state :'/')
			})
			.catch(error => {
				const errorMessage = error.message.split('/')[1].split(')')[0];
				Swal.fire({
					title: errorMessage,
					icon: "warning",
				}).then((result) => {
					
				});
			})
		
		e.target.reset()
	}

	const handleForgetPassword = () => {
		forgetPassword(emailRef.current.value)
	}
    
  return (
		<div>
			<Navbar />
			<form
				onSubmit={handleLoginUser}
				className="lg:px-10 px-5 py-5 bg-slate-50 w-2/3 mx-auto lg:w-1/3 rounded-md mt-32 lg:mt-10"
			>
				<h1 className="my-4 text-center font-bold">Login your account</h1>

				<Input
					style={`bg-slate-300 rounded-xl px-3 py-2 w-full mb-2 outline-0`}
					placeholder="Enter your email"
					type="email"
					name="email"
					isRef={emailRef}
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

				<div className="flex justify-center my-2">
					<Button
						txt="Login"
					  style="w-full bg-[#403F3F] text-white py-2 rounded-md"
					  
					/>
				</div>
				<div className="flex justify-between">
					<p className="text-[14px]">
						Dont't Have An Account ?{" "}
						<span className="text-blue-500">
							{" "}
							<Link to="/regester">Regester</Link>
						</span>
					</p>
					<button
						onClick={handleForgetPassword}
						className="text-blue-500 underline"
					>
						Forget Password
					</button>
				</div>
				<div>
				  <button
					  type="button"
					  className="border-2 px-4 py-2 mt-3 rounded-xl"
						onClick={() => {
							loginWithGoogle()
								.then((res) => {
									navigate(location.state ? location.state : "/");
								})
								.catch((error) => console.log(error));
						}}
					>
						login with google
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login
