import Image from "next/image"
export default function Banner({ datas }) {
    return(
        <div>
            {
                datas.map(e => {
                    return <Image alt={e.title ? e.title : e.name} key={e.id} className="img-banner" width={500} height={500} src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} />
                })
            }
        </div>

    )
}