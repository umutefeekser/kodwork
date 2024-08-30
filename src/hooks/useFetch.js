import { useEffect, useState } from "react"
import axios from 'axios'

export default (apiUrl) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get(apiUrl)
        .then(res => {
            setLoading(false);
            setData(res.data)
        })
        .catch(err => {
            setLoading(false);
            setError(err);
            console.log("hata",err)
        })
    },[])

    return { loading, error, data }
}