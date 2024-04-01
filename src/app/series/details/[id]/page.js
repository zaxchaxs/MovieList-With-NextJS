import Loading from "@/app/loading";
import DetailPage from "@/components/DetailPage";
import Card from "@/components/HomePage/Card";
import axios from "axios";
import { Suspense } from "react";

const fetchData = async (path) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`
        }
    };
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT + path}`, options);
        return res.data;
    } catch(e) {
        throw new Error(e)
    }
}

export default async function MoviesDetail ({params}) {
    const seriesDetail = await fetchData(`/tv/${params.id}`);
    const recommendationsSeries = await fetchData(`/tv/${params.id}/recommendations`);
    const cardTitle = "Recommendations"
    return (   
        <>
        <Suspense fallback={<Loading />}>
            <DetailPage detailData={seriesDetail} />
            <Card propsData={{cardTitle}} datas={recommendationsSeries.results} />
        </Suspense>
        </>
    )
}