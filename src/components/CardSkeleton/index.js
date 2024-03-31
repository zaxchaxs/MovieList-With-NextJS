import { SkeletonTheme } from "react-loading-skeleton";
import Skeleton from "react-loading-skeleton";
export default function CardSkeleton({cards}) {
    return (
        <SkeletonTheme baseColor="#b3b3b3" highlightColor="#a3a3a3">
            <div className="w-full">
                <div className="flex justify-center p-4 items-center">
                    <div className="font-bold text-2xl">
                        <h1>Loading...</h1>
                    </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-bold p-2">
                {
                    Array(cards).fill("").map((data, index) => {
                        return (
                            <li key={index} className="hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 shadow-lg flex-none w-fit rounded-md bg-white p-2" >
                                <div className="rounded-md w-full h-full">
                                    <Skeleton className="w-full h-full" width={240} height={300}/>
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