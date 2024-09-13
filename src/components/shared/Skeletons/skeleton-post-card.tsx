import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonPostCard() {
    return (
        <div className="post-card w-full max-w-md mx-auto bg-dark-3 rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <Skeleton className="w-12 h-12 rounded-full bg-dark-4" />
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-24 bg-dark-4" />
                        <Skeleton className="h-3 w-32 bg-dark-4" />
                    </div>
                </div>
                <Skeleton className="w-5 h-5 bg-dark-4" />
            </div>
            <div className="py-5">
                <Skeleton className="h-4 w-3/4 mb-2 bg-dark-4" />
                <Skeleton className="h-4 w-1/2 bg-dark-4" />
            </div>
            <Skeleton className="w-full h-64 rounded-lg bg-dark-4" />
            <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                    <Skeleton className="w-6 h-6 bg-dark-4" />
                    <Skeleton className="w-6 h-6 bg-dark-4" />
                </div>
                <Skeleton className="w-10 h-6 bg-dark-4" />
            </div>
        </div>
    )
}