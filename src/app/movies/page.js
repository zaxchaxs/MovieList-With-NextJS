import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Here is popular movies.",
        desc: "Check the details of your favorite movies below.",
        placeholder: "Search for popular movies...",
        cardTitle: "Popular Movies"
    }

    return(
        <>
            <HomePage path={"/movie/popular"} propsData={propsData} />
        </>
    )
} 