import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Here is popular movies.",
        desc: "Check the details of your favorite movies below. BTW, sometimes there's not found.",
        placeholder: "Search for popular movies here...",
        cardTitle: "Popular Movies",
        mediaType: "movie"
    }

    return(
        <>
            <HomePage path={"/movie/popular"} propsData={propsData} />
        </>
    )
} 