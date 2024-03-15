import Image from "next/image"

export default function MoreDetails({detailData}) {
    return(
        <div className="h-fit bg-gray-800 rounded-2xl shadow-lg items-center p-9 m-2">
            <div className="text-white w-full">
                <h2 className="text-2xl font-bold my-2">{detailData.tagline}</h2>
                <ul className="items-center gap-2 grid grid-cols-2 md:grid-cols-3 sm:hidden font-bold">
                {
                    detailData.genres.map((genre) => {
                        return (
                                <li key={genre.id} className="sm:inline text-sm px-2 bg-white rounded-full text-black w-fit">
                                    <p>{genre.name}</p>
                                </li>
                            ) 
                        })
                }
                </ul>
                <p className="text-lg my-2">Synopsis: </p>
                <p className="text-xl">{detailData.overview}</p>
                {
                    detailData.runtime ? <p className="text-lg font-normal">{`Duration: ${(detailData.runtime/60).toFixed(1)} hours`}</p> : "" 
                }
                
            </div>
            <div className="items-center w-full">
                <div className="flex justify-center p-4 items-center">
                    <h1 className="text-white font-bold text-2xl">Production Companies</h1>
                </div>
                <ul className="grid grid-cols-2 md:flex w-full gap-8 justify-center items-center">
                {
                    detailData.production_companies.map((companies) => {
                        return ( 
                                <li key={companies.id} className="w-32 sm:w-36 md:w-48">
                                    <Image src={`https://image.tmdb.org/t/p/w500${companies.logo_path}`} width={200} height={200} alt={companies.name} />

                                </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}