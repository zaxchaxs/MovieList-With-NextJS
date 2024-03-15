import Image from "next/image";

export default function Detail({detailData}) {
    // return console.log("detailData");
    return(
        <div className="m-2 h-72 md:h-96 bg-banner rounded-2xl shadow-lg items-center flex">
            <div className="m-5 flex shadow-lg mx-5 md:mx-10 relative group">
                <div className="h-full w-full bg-black absolute rounded-xl opacity-0 group-hover:opacity-50 transition-all ease-in-out duration-300">

                </div>
                <Image className="rounded-xl" src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`} width={230} height={230} alt={detailData.title ? detailData.title : detailData.name}  />
            </div>
            <div className="font-bold text-white w-3/4 h-3/4 relative">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{detailData.title ? detailData.title : detailData.name}
                </h1>
                <div className="my-2 flex gap-4 items-center w-fit">
                    <p className="text-sm md:text-lg font-bold">{`${detailData.release_date ? detailData.release_date : detailData.last_air_date}`}</p>
                    <p className="text-sm font-normal md:text-base" >{`Status: ${detailData.status}`}</p>
                </div>
                <ul className="items-center gap-2 grid grid-cols-2 sm:grid-cols-3 md:flex">
                {
                    detailData.genres.map((genre) => {
                    return (
                            <li key={genre.id} className="hidden sm:inline text-sm px-2 bg-white rounded-full text-black w-fit">
                                <p>{genre.name}</p>
                            </li>
                        ) 
                    })
                }   
                </ul>
                <div className=" p-2 absolute bottom-5 hidden md:inline-block ">
                    <h2>
                        {detailData.tagline}
                    </h2>
                    <p className="mt-3 font-normal text-lg ">
                        {detailData.overview}
                    </p>
                </div>
            </div>
        </div>
    )
}