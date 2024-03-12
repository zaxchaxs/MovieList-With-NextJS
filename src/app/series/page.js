import HomePage from "@/components/HomePage";

export default function Movies() {

    const propsData = {
        title: "Here is popular TV Series.",
        desc: "Check the details of your favorite TV Series below.",
        placeholder: "Search for popular Series...",
        cardTitle: "Popular TV Series"
    }

    return(
        <>
            <HomePage path={"/tv/popular"} propsData={propsData} />
        </>
    )
} 