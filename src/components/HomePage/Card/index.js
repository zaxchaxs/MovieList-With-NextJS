import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card({datas}) {
    const [limitData, setLimitData] = useState(14);

    return (
        <>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
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
        </>
    )
}