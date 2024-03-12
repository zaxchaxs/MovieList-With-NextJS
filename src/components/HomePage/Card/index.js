import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card({datas, cardTitle}) {
    const [limitData, setLimitData] = useState(14);
    const [isShowAllData, setShowAllData] = useState(true);

    // handler functions

    const handleSeeMoreData = () => {
        isShowAllData ? setLimitData(datas.length) : setLimitData(14)
        setShowAllData(!isShowAllData);
    }
    return (
        <div className="w-full">
            <div className="flex justify-center p-4 items-center">
                <div className="font-bold text-2xl">
                    <h1 className="">{cardTitle}</h1>
                </div>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-bold">
                {
                datas.map((data, index) => {
                    if(index > limitData) return;
                    return <li key={data.id} className="hover:scale-105 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2 " >
                            <Link href={"#"} >
                                <Image alt={data.title ? data.title : data.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                                <h1 className="p-2" >{data.title ? data.title : data.name}</h1>
                            </Link>     
                            </li>;
                    })
                }
            </ul>
            <div className="flex justify-center m-2">
                <div className=" m-2 px-2 py-1 rounded-md bg-red-800 w-fit font-bold text-sm hover:bg-red-500 hover:scale-105 active:bg-red-800 text-white cursor-pointer" onClick={handleSeeMoreData}>
                        <button>{isShowAllData ? "See More" : "Show Less"}</button>
                </div>

            </div>
        </div>  
 )
}