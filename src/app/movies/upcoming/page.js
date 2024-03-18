import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Upcoming Movies.",
        desc: "Here is movies that are being released soon. BTW, sometimes there's not found.",
        placeholder: "Search for the movies here...",
        cardTitle: "Upcoming Movies",
        mediaType: "movie"
    }

    return(
        <>
            <HomePage path={"/movie/upcoming"} propsData={propsData} />
        </>
    )
} 