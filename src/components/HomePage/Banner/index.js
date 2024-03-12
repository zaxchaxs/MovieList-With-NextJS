import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Banner({ datas }) {

    const [index, setIndex] = useState(0);
    return (
        <div className="w-full -mt-1 mx-auto bg-banner -z-10 flex gap-8 lg:gap-24 items-center p-4" >
            <div className="text-white font-bold w-full md:w-1/2 p-4 h-full">
                <h1 className="text-5xl m-2">Welcome.</h1>
                <h1 className="text-2xl m-2">Check the details of your favorite movies or tv series below.</h1>
                <form className="w-full rounded-full shadow-lg text-red-900 my-4 flex relative" >
                    <input className="w-full font-normal rounded-full p-2 px-4 border-0" type="search" placeholder="Search for movie and tv series..." />
                    <div className="p-2 px-4 text-white font-bold absolute -right-1 z-20 bg-red-950 rounded-full hover:bg-red-800 transition-all ease-in-out duration-200 active:bg-red-950 cursor-pointer">
                        <button>Search</button>
                    </div>
                </form>
            </div>
            <div className="group hidden md:flex items-center text-white w-1/2 gap-4">
                <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    <button>Click!</button>
                </div>
                <Link className="hover:scale-105 transition-all ease-in-out duration-300 shadow-lg" href={"#"} >
                    <Image alt={datas[(index)].title ? datas[index].title : datas[index].name} className="rounded-md w-fit" width={600} height={600} src={`https://image.tmdb.org/t/p/w500${datas[index].backdrop_path}`} />
                </Link>
                <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300" >
                    <button>Click!</button>
                </div>
            </div>
            
            {/* <ul className="flex justify-center items-center p-4 z-10 " > */}
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
                {/* <li className="hover:scale-105 transition-all ease-in-out duration-300 shadow-lg" >
                    <Link href={"#"} >
                        <Image alt={datas[(index)].title ? datas[index].title : datas[index].name} className="rounded-md w-fit" width={600} height={600} src={`https://image.tmdb.org/t/p/w500${datas[index].backdrop_path}`} />
                    </Link>
                </li> */}
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


            {/* </ul> */}
            <div className="border-2 border-black hidden">
                <input type="button" value={"Click this!"} className="cursor-pointer" onClick={() => setIndex((index) => index+1)} />
            </div>
            <div className="border-2 border-black hidden">
                <input type="button" value={"Click this!"} className="cursor-pointer" onClick={() => setIndex((index) => index-1)} />
            </div>
        </div>
        
    )
}