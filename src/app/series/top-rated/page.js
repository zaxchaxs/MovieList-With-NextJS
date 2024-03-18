import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Here Top Rated of TV Series.",
        desc: "Check the details of your favorite TV Series below.",
        placeholder: "Search for popular Series...",
        cardTitle: "Top Rated TV Series",
        mediaType: "tv"
    }

    return(
        <>
            <HomePage path={"/tv/top_rated"} propsData={propsData} />
        </>
    )
} 