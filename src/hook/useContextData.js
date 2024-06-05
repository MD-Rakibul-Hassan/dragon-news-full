import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";



function useContextData() {
    const data = useContext(AuthContext);
    return data
}
export default useContextData;