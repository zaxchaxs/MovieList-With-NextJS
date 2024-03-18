import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Here is Top Rated of Movies.",
        desc: "Check the details of your favorite movies below. BTW, sometimes there's not found.",
        placeholder: "Search for top rated movies here...",
        cardTitle: "Top Rated Movies",
        mediaType: "movie"
    }

    return(
        <>
            <HomePage path={"/movie/top_rated"} propsData={propsData} />
        </>
    )
} 