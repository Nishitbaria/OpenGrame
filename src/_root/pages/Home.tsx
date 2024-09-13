import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations"
import PostCard from "@/components/shared/PostCard"
import { Models } from "appwrite"
import StoriesContainer from "@/components/shared/StoriesContainer"
import SkeletonPostCard from "../../components/shared/Skeletons/skeleton-post-card"

export default function Home() {
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts()

  if (isErrorPosts) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="home-container">
        <StoriesContainer />
        <div className="home-posts">
          <h2 className="w-full text-left h3-bold md:h2-bold">Home Feed</h2>
          {isPostLoading ? (
            <ul className="flex flex-col flex-1 w-full gap-9">
              {[...Array(3)].map((_, index) => (
                <li key={index} className="flex justify-center w-full">
                  <SkeletonPostCard />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col flex-1 w-full gap-9">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} key={post.caption} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}