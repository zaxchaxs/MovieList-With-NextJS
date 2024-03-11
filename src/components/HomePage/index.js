"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";
import temporaryData from "../temporaryData";
import Card from "./Card";

export default function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
            }
        };
        setData(temporaryData);
        // const fetchData = async () => {

            // try{
            //     const res = await axios.get(`${process.env.API_BASE_ENDPOINT}/trending/all/day?language=en-US`, options);
            //     const datas = res.data.results;
            //     setData(datas);
            //     console.log(datas);
            // } catch(e) {
            //     throw new Error(e)
            // }
        // }

        // fetchData();
    }, [])
    
    return(
        <>
            <Banner datas={temporaryData} />
            <Card datas={temporaryData} />
        </>
    )
}