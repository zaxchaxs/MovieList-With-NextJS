import DetailPage from "@/components/DetailPage";
import Card from "@/components/HomePage/Card";
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
    const movieDetail = await fetchData(`/movie/${params.id}`)
    const recommendationsMovie = await fetchData(`/movie/${params.id}/recommendations`);
    console.log(recommendationsMovie)
    const cardTitle = "Recommendations"
    return (   
        <>
            <DetailPage detailData={movieDetail} />
            <Card propsData={{cardTitle}} datas={recommendationsMovie.results}/>
        </>
    )
}