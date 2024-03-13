import Detail from "./Details";
import detailData from "@/components/temporaryDetail"

export default function DetailPage({id}) {

    // Fetch api
    return(
        <main className="min-h-screen items-center py-16 bg-gray-200">
            <Detail detailData={detailData} id={id} />
        </main>
    )
}