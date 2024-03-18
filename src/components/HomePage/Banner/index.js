import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import arrowBackIcon from '@/../public/icon/arrow-back.svg'
import arrowForward from '@/../public/icon/arrow-forward.svg'

export default function Banner({ datas, propsData, onSearch }) {

    const [index, setIndex] = useState(0);
    const [filterData, setFilterData] = useState("");

    // handlers function
    const handlerNextImage = () => {
        if(index === datas.length-1) {
            setIndex(0);
        } else {
            setIndex(index+1);
        }
    };
    const handlerPrevImage = () => {
        if(index === 0){
            setIndex(datas.length-1);
        } else {
            setIndex(index-1);
        }
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
        onSearch(e.target.elements.searchInput.value);
        setFilterData("");
    }

    return (
        <div className="w-full -mt-1 mx-auto bg-banner -z-10 flex gap-8 lg:gap-24 items-center p-4 h-80" >
            <div className="text-white font-bold w-full md:w-1/2 p-4 h-full relative">
                <h1 className="text-4xl m-2">{propsData.title}</h1>
                <h1 className="text-2xl m-2">{propsData.desc}</h1>
                <form onSubmit={e => handlerSubmit(e)} className="w-full rounded-full shadow-lg text-red-900 my-4 flex relative lg:mt-20 mt-10" >
                    <input name="searchInput" value={filterData} onChange={e => setFilterData(e.target.value)} className="w-full font-normal rounded-full p-2 px-4 border-0" type="search" placeholder={propsData.placeholder} />
                    <div className="p-2 px-4 text-white font-bold absolute -right-1 z-20 bg-red-950 rounded-full hover:bg-red-800 transition-all ease-in-out duration-200 active:bg-red-950 cursor-pointer">
                        <button>Search</button>
                    </div>
                </form>
            </div>
            <div className="group hidden md:flex items-center text-white w-1/2 gap-2">
                <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105 relative" onClick={handlerPrevImage}>
                    <Image className="opacity-70" src={arrowBackIcon} alt="Back Icon" width={45} height={45} />
                </div>
                <div className="relative hover:scale-105 transition-all ease-in-out duration-300 shadow-lg group/banner active:scale-100">
                    {
                        datas.map((e, i) => {
                            if(i === index) {
                                if(e.media_type) {
                                    return <Link key={e.id} href={e.media_type === "movie" ? `/movies/details/${e.id}` : `/series/details/${e.id}`} >
                                                <div className="absolute z-20 opacity-0 group-hover/banner:opacity-100 transition-all ease-in-out duration-300 font-bold p-4 bottom-4">
                                                    <h1 className="text-xl">{e.title ? e.title : e.name}</h1>
                                                </div>
                                                <div className=" h-full w-full bg-black absolute rounded-xl opacity-0 group-hover/banner:opacity-50 transition-all ease-in-out duration-300 cursor-pointer">
                                                </div>
                                                <Image alt={e.title ? e.title : e.name}className="rounded-2xl w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${e. backdrop_path}`} />
                                            </Link>
                                }
                                return <Link key={e.id} href={propsData.mediaType === "movie" ? `/movies/details/${e.id}` : `/series/details/${e.id}`} >
                                            <div className="absolute z-20 opacity-0 group-hover/banner:opacity-100 transition-all ease-in-out duration-300 font-bold p-4 bottom-4">
                                                <h1 className="text-xl">{e.title ? e.title : e.name}</h1>
                                            </div>
                                            <div className=" h-full w-full bg-black absolute rounded-xl opacity-0 group-hover/banner:opacity-50 transition-all ease-in-out duration-300 cursor-pointer">
                                            </div>
                                            <Image alt={e.title ? e.title : e.name}className="rounded-2xl w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${e. backdrop_path}`} />
                                        </Link>
                            }
                        })
                    }
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105" onClick={handlerNextImage} >
                    <Image className="opacity-70" src={arrowForward} alt="Forward" width={45} height={45} />
                </div>
            </div>
        </div>
    )
}