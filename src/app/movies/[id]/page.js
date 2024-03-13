import DetailPage from "@/components/DetailPage";

export default function MoviesDetail ({params}) {

    return (   
        <>
            <DetailPage id={params.id} />
        </>
    )
}