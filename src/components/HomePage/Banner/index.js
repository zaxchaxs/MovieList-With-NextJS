import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import arrowBackIcon from '@/../public/icon/arrow-back.svg'
import arrowForward from '@/../public/icon/arrow-forward.svg'
import { data } from "autoprefixer"

export default function Banner({ datas }) {

    const [index, setIndex] = useState(0);

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

    return (
        <div className="w-full -mt-1 mx-auto bg-banner -z-10 flex gap-8 lg:gap-24 items-center p-4 h-80" >
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
            <div className="group hidden md:flex items-center text-white w-1/2 gap-2">
                <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105" onClick={handlerPrevImage}>
                    <Image className="opacity-70" src={arrowBackIcon} alt="Back Icon" width={45} height={45} />
                </div>
                <Link className="hover:scale-105 transition-all ease-in-out duration-300 shadow-lg" href={"#"} >
                    {
                        datas.map((e, i) => {
                            if(i === index) {
                                return <Image alt={e.title ? e.title : e.name} className="rounded-2xl w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} />

                            }
                        })
                    }
                    {/* <Image alt={datas[(index)].title ? datas[index].title : datas[index].name} className="rounded-2xl w-fit" width={700} height={700} src={`https://image.tmdb.org/t/p/w500${datas[index].backdrop_path}`} /> */}
                </Link>
                <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer hover:scale-105" onClick={handlerNextImage} >
                    <Image className="opacity-70" src={arrowForward} alt="Forward" width={45} height={45} />
                </div>
            </div>
        </div>
        
    )
}