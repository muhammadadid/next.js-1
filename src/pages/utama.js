import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Utama = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
            headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" }
        })
        .then((resp) => {
            setData(resp);
            setLoading(false);
        })
        
    }, []);
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};
export default Utama