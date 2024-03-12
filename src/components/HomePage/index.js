"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";
import temporaryData from "../temporaryData";
import Card from "./Card";

export default function HomePage() {
    const [data, setData] = useState([]);


    // Fetch Data
    const fetchData = async () => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
            }
        };
        try{
            const res = await axios.get(`${process.env.API_BASE_ENDPOINT}/trending/all/day?language=en-US`, options);
            setData(() => res.data.results);
        } catch(e) {
            throw new Error(e)
        }
    };

    useEffect(() => {
        // setData(temporaryData);
        fetchData();
    }, []);
    
    return(
        <>
            <Banner datas={data} />
            <Card datas={data} />
        </>
    )
}