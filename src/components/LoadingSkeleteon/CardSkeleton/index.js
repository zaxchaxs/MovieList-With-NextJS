import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function CardSkeleton({cards}) {
    return (
        <SkeletonTheme baseColor="#b3b3b3" highlightColor="#a3a3a3">
            <div className="w-full">
                <div className="flex justify-center p-4 items-center">
                    <div className="font-bold text-2xl">
                        <h1 className="text-sm sm:text-base md:text-lg">Loading...</h1>
                    </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-bold p-2">
                {
                    Array(cards).fill("").map((data, index) => {
                        return (
                            <li key={index} className="shadow-lg flex-none rounded-md bg-white p-2" >
                                <div className="rounded-md w-full h-64">
                                    <Skeleton className="w-full h-full "/>
                                </div>
                            </li>
                        )
                    })
                }   
                </ul>
            </div>
        </SkeletonTheme>
    )
}