import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Banner({ datas }) {

    const [index, setIndex] = useState(0);
    return (
        <div className="w-full rounded-md border-red-300 border-2 bg-background-banner bg-black" >    
            <ul className="flex justify-center items-center p-4" >
                {/* {
                    dataBanner.map((e, i) => {
                        // while(i > index-3 && i < index+1) {
                        return <li key={e.id} className="hover:scale-105 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit" >
                                    <Link href={"#"} >
                                        <Image alt={e.title ? e.title : e.name} className="rounded-md w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} />
                                    </Link>     
                                </li>;

                        // }
                    })
                } */}
                <li className="hover:scale-105 transition-all ease-in-out duration-300 shadow-lg" >
                    <Link href={"#"} >
                        <Image alt={datas[(index)].title ? datas[index].title : datas[index].name} className="rounded-md w-fit" width={600} height={600} src={`https://image.tmdb.org/t/p/w500${datas[index].backdrop_path}`} />
                    </Link>


                </li>
                {/* <li className="hover:scale-105 transition-all ease-in-out duration-300 shadow-xl" >
                    <Link href={"#"}>
                        <Image alt={datas[index+1].title ? datas[index+1].title : datas[index+1].name} className="rounded-xl w-fit duration-500 transition-all" width={600} height={600} src={`https://image.tmdb.org/t/p/w500${datas[index+1].backdrop_path}`} />
                    
                    </Link>

                </li>
                <li className="hover:scale-105 transition-all ease-in-out duration-300 shadow-xl" >
                    <Link href={"#"}>
                        <Image alt={datas[index+2].title ? datas[index+2].title : datas[index+2].name} className="rounded-xl w-fit duration-500 transition-all" width={600} height={600} src={`https://image.tmdb.org/t/p/w500${datas[index+2].backdrop_path}`} />
                    
                    </Link>
                </li> */}

            {/* {
                datas.map(e => {
                    return (
                        <li className="hover:scale-105 transition-all ease-in-out duration-300 shadow-lg flex-none" >
                            <Link href={"#"} >
                                <Image alt={e.title ? e.title : e.name} className="rounded-md w-fit" width={600} height={600} src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} />
                            </Link>
                        </li>
                    )
                })
            } */}


            </ul>
            <div className="border-2 border-black hidden">
                <input type="button" value={"Click this!"} className="cursor-pointer" onClick={() => setIndex((index) => index+1)} />
            </div>
            <div className="border-2 border-black hidden">
                <input type="button" value={"Click this!"} className="cursor-pointer" onClick={() => setIndex((index) => index-1)} />
            </div>
        </div>
        
    )
}