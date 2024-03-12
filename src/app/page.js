import HomePage from "@/components/HomePage";

export default function Home() {

  const propsData = {
    title: "Welcome.",
    desc: "Check the details of your favorite movies and TV Series below.",
    placeholder: "Search for popular movies and series...",
    cardTitle: "Popular Movies & TV Series"
  }
  return (
    <HomePage path={"/trending/all/day?language=en-US"} propsData={propsData} />
  );
}
