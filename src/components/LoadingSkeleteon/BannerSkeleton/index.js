import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function BannerSkeleton() {
    return (
        <SkeletonTheme baseColor="#b3b3b3" highlightColor="#a3a3a3">
            <div className="z-20 p-4 w-full h-full rounded-2xl bg-white">
                <Skeleton width={450} height={250} />
            </div>
        </SkeletonTheme>
    )
}