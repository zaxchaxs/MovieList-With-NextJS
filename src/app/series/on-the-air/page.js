import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Here On the Air of TV Series.",
        desc: "Here is TV Shows/Series TV shows that air in the next 7 days.",
        placeholder: "Search for Series/TV shows that air in the next 7 days....",
        cardTitle: "ON The Air TV Series",
        mediaType: "tv"
    }

    return(
        <>
            <HomePage path={"/tv/top_rated"} propsData={propsData} />
        </>
    )
} 