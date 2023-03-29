import React, {useCallback, useEffect, useState} from 'react';

interface hookData {
    url: URL,
    type?: string,
    body?: Object
}

const FetchHook = ({url, type='GET', body}:hookData) => {
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
            setData((response as any).data)
        }catch(e){
            setError(e)
        }
    },[url])

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return {
        data,
        error,
        revalidate: fetchData
    };
};

export default FetchHook