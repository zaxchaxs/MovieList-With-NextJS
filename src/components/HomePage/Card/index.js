'use client'
import CardSkeleton from "@/components/CardSkeleton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Card({datas, propsData, onResetData, isLoading}) {
    const [limitData, setLimitData] = useState(14);
    const [isShowAllData, setShowAllData] = useState(true);

    // handler functions
    const handleSeeMoreData = () => {
        isShowAllData ? setLimitData(datas.length) : setLimitData(14)
        setShowAllData(!isShowAllData);
    }

    return (
        <>
        {
            isLoading ? <CardSkeleton cards={10} />
            :
            <div className="w-full">
                <div className="flex justify-center p-4 items-center">
                    <div className="font-bold text-2xl">
                        <h1 className="">{propsData.cardTitle || "Loading..."}</h1>
                    </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-bold p-2">
                    {
                    isLoading ? <CardSkeleton cards={10} />
                    :
                    datas.map((data, index) => {
                        if(index > limitData) return;
                        if(data.media_type) {
                        return <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={data.media_type === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}` 
                                    } >
                                    <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                                </li>;
                        };
                        return <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={propsData.mediaType === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}`} >
                                    <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                                </li>;
                        })
                    }
                    {/* {
                    datas.map((data, index) => {
                        if(index > limitData) return;
                        if(data.media_type) {
                        return <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={data.media_type === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}` 
                                    } >
                                    <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                                </li>;
                        };
                        return <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={propsData.mediaType === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}`} >
                                    <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                                </li>;
                        })
                    } */}
                </ul>
                <div className="flex justify-center m-2">
                    <div className=" m-2 px-2 py-1 rounded-md bg-red-800 w-fit font-bold text-sm hover:bg-red-500 hover:scale-105 active:bg-red-800 text-white cursor-pointer" onClick={handleSeeMoreData}>
                            <button>{isShowAllData ? "See More" : "Show Less"}</button>
                    </div>

                </div>
            </div>
        }
        
        </>

    )
    
    if(datas.length !== 0) {
        return (
            <div className="w-full">
                <div className="flex justify-center p-4 items-center">
                    <div className="font-bold text-2xl">
                        <h1 className="">{propsData.cardTitle || "Loading..."}</h1>
                    </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-bold p-2">
                    {
                    isLoading ? <CardSkeleton cards={10} />
                    :
                    datas.map((data, index) => {
                        if(index > limitData) return;
                        if(data.media_type) {
                        return <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={data.media_type === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}` 
                                    } >
                                    <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                                </li>;
                        };
                        return <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={propsData.mediaType === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}`} >
                                    <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                                </li>;
                        })
                    }
                    {/* {
                    datas.map((data, index) => {
                        if(index > limitData) return;
                        if(data.media_type) {
                        return <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={data.media_type === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}` 
                                    } >
                                    <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                                </li>;
                        };
                        return <li key={data.id} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                                <Link href={propsData.mediaType === "movie" ? `/movies/details/${data.id}` : `/series/details/${data.id}`} >
                                    <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                    <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                                </Link>     
                                </li>;
                        })
                    } */}
                </ul>
                <div className="flex justify-center m-2">
                    <div className=" m-2 px-2 py-1 rounded-md bg-red-800 w-fit font-bold text-sm hover:bg-red-500 hover:scale-105 active:bg-red-800 text-white cursor-pointer" onClick={handleSeeMoreData}>
                            <button>{isShowAllData ? "See More" : "Show Less"}</button>
                    </div>
    
                </div>
            </div>
     )
    };

    // return (
    //     <div className="w-full p-4  flex items-center justify-center">
    //         <div className="p-2 ">
    //             <h1 className="text-xl text-gray-700 font-bold" >{`The movies or the series is not found in ${propsData.cardTitle}`}</h1>
    //             <div className="m-2 flex items-center justify-center">
    //                 <button onClick={onResetData} className="p-2 px-4 text-white font-bold hover:bg-red-800 duration-200 active:bg-red-950 bg-red-950 rounded-lg cursor-pointer">OK</button>
    //             </div>
    //         </div>
    //     </div>
    // )
}