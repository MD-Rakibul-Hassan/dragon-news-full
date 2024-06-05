
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_PROJECTID,
	storageBucket: import.meta.env.VITE_STORAGEBUKET,
	messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APPID,
	// apiKey: "AIzaSyDBpXQO1LtFT72r6rB504DbH7OdXp846CI",
	// authDomain: "dragon-news-a8645.firebaseapp.com",
	// projectId: "dragon-news-a8645",
	// storageBucket: "dragon-news-a8645.appspot.com",
	// messagingSenderId: "79408529564",
	// appId: "1:79408529564:web:4cd1a7c8ed7a023e432d59",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)