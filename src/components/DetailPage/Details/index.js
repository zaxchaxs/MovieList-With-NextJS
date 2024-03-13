import Image from "next/image";

export default function Detail({id, detailData}) {

    return(
        <>
            <div className="m-3 h-72 md:h-96 bg-banner rounded-2xl shadow-lg items-center flex">
                <div className="m-5 flex shadow-lg mx-10 relative group">
                    <div className="h-full w-full bg-black absolute rounded-xl opacity-0 group-hover:opacity-50 transition-all ease-in-out duration-300">

                    </div>
                    <Image className="rounded-xl" src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`} width={230} height={230} alt={detailData.title}  />
                </div>
                <div className="font-bold text-white border-2 border-red-500 w-3/4 h-3/4 relative">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">{detailData.title}
                    </h1>
                    <p className="text-sm md:text-lg my-2 font-bold">{`${detailData.release_date}`}</p>
                    <div className="items-center gap-4 my-2 grid grid-cols-3 md:flex">
                        {
                            detailData.genres.map((genre) => {
                            return <p className="text-sm px-2 bg-white rounded-full text-black">{genre.name}</p>
                            })
                        }
                    </div>
                    <div className="border-2 border-black p-2 absolute bottom-5 hidden">
                        <h2>
                            {detailData.tagline}
                        </h2>
                        <p className="mt-5">
                            {detailData.overview}
                        </p>
                    </div>
                </div>
            </div>
        
        </>
    )
}