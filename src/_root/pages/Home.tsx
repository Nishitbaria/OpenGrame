import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import Loader from "../../components/shared/Loader";
import React from "react";
import { Models } from "appwrite";

const Home = () => {
  const isPOstLoading = true;
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  return (
    <div className="flex flex-1 ">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full"> Home Feed</h2>
          {isPostLoading ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((posts: Models.Document) => (
                <li> {posts.caption} </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
