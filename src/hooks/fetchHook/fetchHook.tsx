import React, {useCallback, useEffect, useState} from 'react';

interface hookData {
    url: URL,
    type?: string,
    body?: Object,
    revalidate?: boolean
}

const useFetch = ({url, type='GET', body, revalidate}:hookData) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState<any>()
    const [loading,setLoading] = useState(false)
    
    const fetchData = useCallback(async () => {
        setError(false)
        try{
            setLoading(true);
            const response = await fetch(url, {
                method: type,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            let json = await response.json()
            setData((json as any))
        }catch(e){
            setError(e)
        }
    },[url])

    useEffect(() => {
        fetchData()
    }, [])
    return {
        data,
        error,
    };
};

export default useFetch