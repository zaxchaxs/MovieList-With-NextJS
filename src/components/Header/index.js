import ContentHeader from "./Content/ContentHeader";


export default function Header() {
    return(
        <header className=" w-full h-auto flex p-4 justify-between shadow-lg rounded-sm fixed backdrop-blur-sm top-0 px-8">
            <ContentHeader />
            <div>
                {/* Search Bar */}
                <p>test</p>
            </div>

        </header>
    )
}