import Detail from "./Details";
import MoreDetails from "./MoreDetails";

export default function DetailPage({ detailData }) {

    return(
        <main className="min-h-screen items-center py-16 bg-gray-200 p-2">
            <Detail detailData={detailData} />
            <MoreDetails detailData={detailData} />
        </main>
    )
}