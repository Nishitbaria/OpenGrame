import { useRef } from "react";
import StoryComponent from "../ui/Story"; // Renamed to StoryComponent to avoid naming conflict
import { useUserContext } from "@/context/AuthContext";
import { useGetAllStories } from "@/lib/react-query/queriesAndMutations";
import Loader from "./Loader";

export default function StoriesContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useGetAllStories();
  const { user: currentUser } = useUserContext();

  const scrollLeft = () => {
    if (containerRef?.current) {
      containerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (containerRef?.current) {
      containerRef.current.scrollLeft += 100;
    }
  };

  if (isError) {
    return (
      <div className="w-full h-20 flex justify-center items-center">
        <h1>Something Went Wrong !!</h1>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full h-20 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="w-[86vw] sm:w-[640px] md:w-[500px] lg:w-full flex justify-center items-center relative">
          <button
            className="hidden md:block absolute -left-[3%] top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 p-1 text-center rounded-full text-sm text-[#de4bff] w-8 h-8"
            onClick={scrollLeft}
          >
            &lt;
          </button>

          <div
            ref={containerRef}
            className="w-full my-1 flex justify-start items-start space-x-3 overflow-x-auto p-1 px-2 rounded drop-shadow-xl no-scrollbar"
          >
            {data?.map(
              (user) =>
                user.id === currentUser.id && (
                  <StoryComponent
                    key={user.id}
                    user={user}
                    isYourStory={true}
                  />
                )
            )}
            {data?.map(
              (user) =>
                user.id !== currentUser.id &&
                user.stories.length > 0 && (
                  <StoryComponent
                    key={user.id}
                    user={user}
                    isYourStory={false}
                  />
                )
            )}
          </div>
          <button
            className="hidden md:block absolute -right-[3%] top-1/2 transform -translate-y-1/2 bg-gray-900 p-1 text-center rounded-full text-sm text-[#de4bff] w-8 h-8"
            onClick={scrollRight}
          >
            &gt;
          </button>
        </div>
      )}
    </>
  );
}
