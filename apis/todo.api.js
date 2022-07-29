import { useState, useEffect } from "react";
import ApiConfig from "./api.config";
import { apiGetCall } from "./api.service";

export const getAllTodos = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiGetCall(ApiConfig.GET_ALL_TODOS).then(response => {
            setData(response.data?.allToDos);
            setLoading(false);
        }).catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);
    return { data, loading, error };
}