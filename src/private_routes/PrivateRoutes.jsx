import { Navigate, useLocation } from "react-router-dom";
import useContextData from "../hook/useContextData"


const PrivateRoutes = ({ children }) => {
    const { user, loding } = useContextData();
    const location = useLocation();
    console.log(location)
    if (loding) {
			return (
				<span className="loading loading-bars loading-lg flex justify-center absolute top-[50%] translate-x-[50%] translate-y-[50%] left-[50%]"></span>
			);
		}
    if (user) {
        return children
    }
  return <Navigate state={location.pathname}  to='/login'/>
}

export default PrivateRoutes
