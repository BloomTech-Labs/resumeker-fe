import { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa.js";

export const useGetToken = () => {
    const [token, setToken] = useState(null);
    const { isAuthenticated, getTokenSilently } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            const fetchToken = async () => {
                const result = await getTokenSilently();
                setToken(result);
            };
            fetchToken();
        } else {
            setToken(null);
        }
    }, [isAuthenticated, getTokenSilently]);

    return token;
};
