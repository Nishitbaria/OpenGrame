import React from 'react';
import GridPostList from "@/components/shared/GridPostList";

interface LikedPostsProps {
  likedPosts: any[] | undefined;
}

const LikedPosts: React.FC<LikedPostsProps> = ({ likedPosts }) => {
  if (!likedPosts || likedPosts.length === 0) {
    return <p className="text-light-4">No liked posts</p>;
  }

  return <GridPostList posts={likedPosts} showStats={false} />;
};

export default LikedPosts;
