"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";
import Card from "./Card";

export default function HomePage({path, propsData}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch Data
        const fetchData = async () => {
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
                }
            };
            try{
                const res = await axios.get(`${process.env.API_BASE_ENDPOINT + path}`, options);
                setData(() => res.data.results);
            } catch(e) {
                throw new Error(e)
            }
        };

        fetchData();
    }, []);
    
    // HandlerFunctions
    const handlerSearchData = (filteringData) => {
        console.log(filteringData);

    }
    return(
         <main className="min-h-screen items-center py-16 bg-gray-200">
            <Banner datas={data} propsData={propsData} onSearch={handlerSearchData} />
            <Card datas={data} propsData={propsData} />
        </main>
    )
}