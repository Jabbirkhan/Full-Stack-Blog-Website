import { useEffect, useMemo, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance.js";
// import { set } from "lodash";
import Loader from "../components/loader.jsx";

export const Context = createContext();

const ContextProvider = ({ children }) => {

  const navigate = useNavigate();
  const [authState, setAuthState] = useState('checking');
  const [socialLinks, setSocialLinks] = useState([]);
  const [allPolicies, setAllPolicies] = useState([]);
  const [allPrinciples, setAllPrinciples] = useState([]);
  const [allInformation, setAllInformation] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  const verifyAdmin = async () => {
    try {
      const response = await axiosInstance.get('/api/v1/admin/verify', { withCredentials: true });
      if (response.data.success) {
        setAuthState('authenticated');
      } // here we did not add else block because if the token is invalid or expired, the axios interceptor will catch the 401 error and redirect to login page
    } catch (error) {
      if(error.response?.status === 401){
        setAuthState('unauthenticated');
      } else {
        setAuthState('unauthenticated'); // fallback
        toast.error(error.response?.data?.message || "Admin verification failed! Please login again.");
      }
    }
  }

  useEffect(() => {
    verifyAdmin();
  }, []);

  const value = useMemo(() => ({
    authState, setAuthState,
    navigate,
    socialLinks, setSocialLinks,
    allPolicies, setAllPolicies,
    allPrinciples, setAllPrinciples,
    allInformation, setAllInformation,
    allBlogs, setAllBlogs,
  }), [authState, socialLinks, allPolicies, allPrinciples, allInformation, allBlogs]);

  return (
    <>
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    </>
  );
}

export default ContextProvider;