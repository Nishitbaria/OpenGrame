import { Models } from "appwrite";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { checkIsLiked } from "@/lib/utils";
import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesAndMutations";
import Share from "../ui/Share";

type PostStatsProps = {
  post?: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  const location = useLocation();
  const likesList = post?.likes.map((user: Models.Document) => user.$id);

  const [likes, setLikes] = useState<string[]>(likesList);
  const [isSaved, setIsSaved] = useState(false);

  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavePost } = useDeleteSavedPost();

  const { data: currentUser } = useGetCurrentUser();

  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id == post?.$id
  );
  const [shareurl, setShareUrl] = useState("");

  useEffect(() => {
    setIsSaved(!savedPostRecord ? false : true);
  }, []);

  const handleLikePost = (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.KeyboardEvent<HTMLImageElement>
  ) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" &&
        (e as React.KeyboardEvent<HTMLImageElement>).key === "Enter")
    ) {
      e.stopPropagation();

      let likesArray = [...likes];

      if (likesArray.includes(userId)) {
        likesArray = likesArray.filter((Id) => Id !== userId);
      } else {
        likesArray.push(userId);
      }

      setLikes(likesArray);
      likePost({ postId: post?.$id || "", likesArray });
    }
  };

  const handleSavePost = (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.KeyboardEvent<HTMLImageElement>
  ) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" &&
        (e as React.KeyboardEvent<HTMLImageElement>).key === "Enter")
    ) {
      e.stopPropagation();
      if (!isSaved) {
        savePost({ userId: userId, postId: post?.$id || "" });
        setIsSaved(true);
      } else {
        deleteSavePost(savedPostRecord.$id);
        setIsSaved(false);
      }
    }
  };

  const handleShare = () => {
    const hostUrl = window.location.origin;

    setShareUrl(hostUrl + "/posts/" + post?.$id);
  };

  const containerStyles = location.pathname.startsWith("/profile")
    ? "w-full"
    : "";

  return (
    <div
      className={` position-relative flex justify-between items-center z-20 ${containerStyles}`}
    >
      <div className="flex gap-2">
        <div className="flex gap-2 mr-5">
          <img
            src={`${
              checkIsLiked(likes, userId)
                ? "/assets/icons/liked.svg"
                : "/assets/icons/like.svg"
            }`}
            alt="like"
            width={20}
            height={20}
            onClick={(e) => handleLikePost(e)}
            onKeyDown={(e) => handleLikePost(e)}
            className="cursor-pointer"
            tabIndex={0}
          />
          <p className="small-medium lg:base-medium">{likes.length}</p>
        </div>
        <div className="flex gap-2 mr-5">
          <Share shareurl={shareurl} handleShare={handleShare} />

          {/* <p className="small-medium lg:base-medium">0</p> */}
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src={isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
          alt="share"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={(e) => handleSavePost(e)}
          onKeyDown={(e) => handleSavePost(e)}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default PostStats;
