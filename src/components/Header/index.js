import ContentHeader from "./Content/ContentHeader";


export default function Header() {
    return(
        <header className=" w-full h-auto flex p-4 justify-between rounded-sm fixed backdrop-blur-md top-0 px-8 z-50 bg-red-950 shadow-red-900">
            <ContentHeader />
            <div>
                {/* Search Bar */}
                <p>test</p>
            </div>

        </header>
    )
}