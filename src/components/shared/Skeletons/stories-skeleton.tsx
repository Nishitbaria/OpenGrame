import { Skeleton } from "@/components/ui/skeleton"

export default function StoriesSkeleton() {
    return (
        <div className="w-[86vw] sm:w-[640px] md:w-[500px] lg:w-full flex justify-center items-center relative">
            <button
                className="hidden md:block absolute -left-[3%] top-1/2 transform -translate-y-1/2 z-10 bg-[#1D1D22] p-1 text-center rounded-full text-sm text-primary-500 w-8 h-8"
                aria-hidden="true"
            >
                &lt;
            </button>

            <div className="flex items-start justify-start w-full p-1 px-2 my-1 space-x-3 overflow-x-auto rounded drop-shadow-xl no-scrollbar">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex flex-none flex-col items-center space-y-1">
                        <div className="relative bg-gradient-to-tr from-blue-400 to-fuchsia-600 p-1 rounded-full">
                            <Skeleton className="w-16 h-16 rounded-full" />
                            {index === 0 && (
                                <div className="absolute bottom-0 right-1 w-5 h-5 bg-dark-4 border border-[#de4bff] border-2 rounded-md" />
                            )}
                        </div>
                        <Skeleton className="h-4 w-16" />
                    </div>
                ))}
            </div>

            <button
                className="hidden md:block absolute -right-[3%] top-1/2 transform -translate-y-1/2 bg-[#1D1D22] p-1 text-center rounded-full text-sm text-primary-500 w-8 h-8"
                aria-hidden="true"
            >
                &gt;
            </button>
        </div>
    )
}