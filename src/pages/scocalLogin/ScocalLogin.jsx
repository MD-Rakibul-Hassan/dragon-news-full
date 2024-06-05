import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import useContextData from "../../hook/useContextData";
import Swal from "sweetalert2";


const ScocalLogin = () => {
	
	const {user, loginWithGoogle, loginWithGithub } = useContextData();
	
	const handleGoogleLogin = () => {
		if (user) {
			Swal.fire({
				position: "top-center",
				icon: "error",
				title: "You have already logined",
				showConfirmButton: false,
				timer: 1500,
			});
		}
		loginWithGoogle()
			.then(userCreadintal => console.log(userCreadintal))
			.catch(error => console.log(error))
	}

	const handlelGithubLogin = () => {
		Swal.fire({
			position: "top-center",
			icon: "error",
			title: "You have already logined",
			showConfirmButton: false,
			timer: 1500,
		});
		loginWithGithub()
			.then(userCreadintal => console.log(userCreadintal))
			.catch(error => console.log(error.message)
			)
	}

	return (
		<div>
			<h1 className="text-xl font-medium">Login With</h1>
			<div className="mt-5">
				<button
					onClick={handleGoogleLogin}
					className="flex items-center gap-2 border-2  px-4 py-2 rounded-xl border-blue-400 text-blue-400 w-full"
				>
					<FaGoogle color="" /> Login With Google
				</button>
				<button
					onClick={handlelGithubLogin}
					className="flex items-center gap-2 border-2  px-4 py-2 rounded-xl mt-2 w-full"
				>
					<FaGithub /> Login With Github
				</button>
			</div>

			<div className="mt-5">
				<h1 className="text-xl font-medium my-3">Find Us On</h1>
				<button className="flex items-center gap-2 border-2  px-4 py-2 w-full mb-2">
					<FaFacebook color="3B599C" /> Login With Google
				</button>
				<button className="flex items-center gap-2 border-2  px-4 py-2 w-full mb-2">
					<FaTwitter color="58A7DE" /> Login With Google
				</button>
				<button className="flex items-center gap-2 border-2  px-4 py-2 w-full mb-2">
					<FaInstagram color="red" /> Login With Google
				</button>
			</div>
			<div className="bg-slate-300 px-5 py-3 ">
				<h1 className="font-bold">Q-Zone</h1>
				<img src={qzone1} alt="" />
				<img src={qzone2} alt="" />
				<img src={qzone3} alt="" />
			</div>
		</div>
	);
};

export default ScocalLogin;
