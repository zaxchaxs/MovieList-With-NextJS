"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";
import Card from "./Card";

export default function HomePage({path, propsData}) {
    const [data, setData] = useState([]);
    const [oriData, setOriData] = useState([]);
    const fetchData = async () => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
            }
        };
        try{
            const result = await axios.get(`${process.env.API_BASE_ENDPOINT + path}`, options);
            setData(result.data.results);
            setOriData(result.data.results);
        } catch(e) {
            throw new Error(e)
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    // HandlerFunctions
    const handlerSearchData = (filteringData) => {
        if(!filteringData){
            setData(oriData);
            return;
        };
        const regex = new RegExp(filteringData, "i");
        const filteredData = data.filter(data => data.title ? regex.test(data.title) : regex.test(data.name));
        setData(filteredData);
    }
    const handlerResetData = () => {
        setData(oriData); 
    }

    return(
         <main className="min-h-screen items-center py-16 bg-gray-200">
            <Banner datas={data} propsData={propsData} onSearch={handlerSearchData} />
            <Card datas={data} propsData={propsData} onResetData={handlerResetData} />
        </main>
    )
}