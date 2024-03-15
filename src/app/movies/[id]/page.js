import DetailPage from "@/components/DetailPage";
import axios from "axios";

const fetchData = async (path) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
        }
    };
    try{
        const res = await axios.get(`${process.env.API_BASE_ENDPOINT + path}`, options);
        return res.data;
    } catch(e) {
        throw new Error(e)
    }
}

export default async function MoviesDetail ({params}) {
    const data = await fetchData(`/movie/${params.id}`)
    return (   
        <>
            {/* <DetailPage path={`/movie/${params.id}`} /> */}
            <DetailPage detailData={data} />
        </>
    )
}