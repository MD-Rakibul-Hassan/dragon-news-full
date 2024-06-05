import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	GoogleAuthProvider,
	signInWithPopup,
	GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loding, setLoding] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const createUserByEmailPasssword = (email, password, tarms) => {
		if (!tarms) {
			return "Please Accept Our Tarms & Condition";
		}
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUserByEmailPassword = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const loginWithGoogle = () => {
		if (user) {
			return
		}
		return signInWithPopup(auth,googleProvider)
	}


	const loginWithGithub = () => {
		if (user) {
			return
		}
		return signInWithPopup(auth, githubProvider);
	}

	const logOutUser = () => {
		return signOut(auth);
	};

	const forgetPassword = (email) => {
        if (!email) {
			return 
		}
		return sendPasswordResetEmail(auth, email);
	};

	useEffect(() => {
		const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoding(false);
		});
		return () => unSubcribe();
	}, []);

	const allData = {
		createUserByEmailPasssword,
		loginUserByEmailPassword,
		logOutUser,
		user,
		forgetPassword,
		loginWithGoogle,
		loginWithGithub,
		loding,
	};
	return (
		<AuthContext.Provider value={allData}>{children}</AuthContext.Provider>
	);
};

export default ContextProvider;
