import { useState, useEffect } from "react";
import ApiConfig from "./api.config";
import { apiGetCall } from "./api.service";

export const loginApi = ({ loginDetails }) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiPostCall(ApiConfig.LOGIN, loginDetails)
            .then(response => {
                setData(response.data);
                setLoading(false);
            }
            ).catch(error => {
                setError(error);
                setLoading(false);
            }
            );
    }, [loginDetails]);
    return { data, loading, error };
}