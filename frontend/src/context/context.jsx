import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../components/loader";
import axiosInstance from "../utils/axiosInstance.js";

export const Context = createContext();

const ContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [authState, setAuthState] = useState('checking');

    const [blogs, setBlogs] = useState([]);
    const [links, setLinks] = useState([]);
    const [policies, setPolicies] = useState([]);
    const [principles, setPrinciples] = useState([]);
    const [information, setInformation] = useState([]);
    const [userProfile, setUserProfile] = useState({});

    const verifyUser = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/user/verifyuser', { withCredentials: true });
            if (response.data.success) {
                setAuthState('authenticated');
            } // here we did not add else block because if the token is invalid or expired, the axios interceptor will catch the 401 error and redirect to login page
        } catch (error) {
            if(error.response?.status === 401){
                setAuthState('unauthenticated')
            } else {
                setAuthState('unauthenticated'); // fallback
                toast.error(error.response?.data?.message || "User verification failed! Please login again.");
            }
        }
    }

    useEffect(() => {
        verifyUser();
    }, []);

    // Fetching blogs 
    const fetchUserProfile = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/user/user-profile', { withCredentials: true });
            if (response.data.success) {
                setUserProfile(response.data.user);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated') {
            fetchUserProfile();
        }
    }, [authState]);
    
    const fetchBlogs = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/user/allblogs', { withCredentials: true });
            if (response.data.success) {
                setBlogs(response.data.newBlogs);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch blogs");
        }
    }

    useEffect(() => {
        if (authState === 'authenticated') {
            fetchBlogs();
        }
    }, [authState]);

    // Fetching social links
    const fetchLinks = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/user/alllinks', { withCredentials: true });
            if (response.data.success) {
                setLinks(response.data.links);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated') {
            fetchLinks();
        }
    }, [authState]);

    // Fetching privacy policy
    const fetchPolicies = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/user/allpolicies', { withCredentials: true });
            if (response.data.success) {
                setPolicies(response.data.policies);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated' || authState === 'unauthenticated') {
            fetchPolicies();
        }
    }, [authState]);

    // Fetching principles
    const fetchPrinciples = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/user/allprinciples', { withCredentials: true });
            if (response.data.success) {
                setPrinciples(response.data.principles);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated') {
            fetchPrinciples();
        }
    }, [authState]);

    // Fetching information
    const fetchInformation = async () => {
        try {
            const response = await axiosInstance.get('/api/v1/user/allinformation', { withCredentials: true });
            if (response.data.success) {
                setInformation(response.data.information);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated') {
            fetchInformation();
        }
    }, [authState]);

    const value = useMemo(() => ({
        backendUrl, navigate,
        authState, setAuthState,
        blogs, setBlogs,
        links, policies, principles, information,
        setLinks, setPolicies, setPrinciples, setInformation,
        userProfile, fetchUserProfile,
    }), [authState, userProfile, blogs, links, policies, principles, information]);

    return (
        <>
            <Context.Provider value={value}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default ContextProvider;

