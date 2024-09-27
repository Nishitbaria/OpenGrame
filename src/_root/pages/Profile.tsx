import React from 'react';
import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserById, useFollowUser, useUnfollowUser } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from 'react';
import {
  Route,
  Routes,
  Link,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import LikedPosts from "./LikedPosts";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";


interface StabBlockProps {
  value: string | number;
  label: string;
}

const StatBlock = ({ value, label }: StabBlockProps) => (
  <div className="gap-2 flex-center">
    <p className="small-semibold lg:body-bold text-primary-500">{value}</p>
    <p className="small-medium lg:base-medium text-light-2">{label}</p>
  </div>
);

const Profile = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const { pathname } = useLocation();
  const { toast } = useToast();

  const { data: currentUser, isLoading, isError } = useGetUserById(id || "");
  const followUser = useFollowUser();
  const unfollowUser = useUnfollowUser();

  useEffect(() => {
    if (id) {
      // The refetch will happen automatically due to the change in query key
    }
  }, [id]);

  if (isLoading) return <Loader />;
  if (isError || !currentUser) return <div>Error loading user profile</div>;

  const copyToClipboard = async () => {
    await window.navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Copied!",
      description: "Profile link copied to clipboard.",
    });
  }

  const handleFollowAction = () => {
    if (!currentUser || !user) return;

    const action = currentUser.followers.includes(user.id) ? unfollowUser : followUser;

    action.mutate(
      { followerId: user.id, followingId: currentUser.$id },
      {
        onSuccess: () => {
          toast({
            title: currentUser.followers.includes(user.id) ? "Unfollowed" : "Followed",
            description: currentUser.followers.includes(user.id)
              ? `You have unfollowed ${currentUser.name}.`
              : `You are now following ${currentUser.name}.`,
          });
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to update follow status. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="profile-container">
      <div className="profile-inner_container">
        <div className="flex flex-col flex-1 xl:flex-row max-xl:items-center gap-7">
          <img
            src={
              currentUser.imageUrl || "/assets/icons/profile-placeholder.svg"
            }
            alt="profile"
            className="rounded-full w-28 h-28 lg:h-36 lg:w-36"
          />
          <div className="flex flex-col justify-between flex-1 md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="w-full text-center xl:text-left h3-bold md:h1-semibold">
                {currentUser.name}
              </h1>
              <p className="text-center small-regular md:body-medium text-light-3 xl:text-left">
                @{currentUser.username}
              </p>
            </div>

            <div className="z-20 flex flex-wrap items-center justify-center gap-8 mt-10 xl:justify-start">
              <StatBlock value={currentUser?.followers?.length || 0} label="Followers" />
              <StatBlock value={currentUser?.following?.length || 0} label="Following" />
              <StatBlock value={currentUser?.posts?.length || 0} label="Posts" />
            </div>

            <p className="max-w-screen-sm text-center small-medium md:base-medium xl:text-left mt-7">
              {currentUser.bio ? (
                currentUser.bio.split('\n').map((line: string, index: number) => (
                  <React.Fragment key={index}>
                    {line}
                    {index !== currentUser.bio.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))
              ) : (
                "No bio available"
              )}
            </p>
          </div>

          <div className={`flex items-start gap-4 ${user.id !== id && "flex-col"}`}>
            <div className={`${user.id !== currentUser.$id && "hidden"}`}>
              <Link
                to={`/update-profile/${currentUser.$id}`}
                className={`h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded-lg ${user.id !== currentUser.$id && "hidden"
                  }`}
              >
                <img
                  src={"/assets/icons/edit.svg"}
                  alt="edit"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="flex whitespace-nowrap small-medium">
                  Edit Profile
                </p>
              </Link>
            </div>
            <Dialog>
              <DialogTrigger>
                <Button
                  className="h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded"
                >
                  <img
                    src={"/assets/icons/share.svg"}
                    alt="edit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="flex whitespace-nowrap small-medium">
                    Share Profile
                  </p>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share Profile</DialogTitle>
                </DialogHeader>
                <div className="flex">
                  <Input className="shad-input" value={window.location.href} disabled></Input>
                  <Button onClick={copyToClipboard}>
                    <img
                      src={"/assets/icons/copy.svg"}
                      alt="edit"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <div className={`${user.id === id && "hidden"}`}>
              <Button
                type="button"
                className="px-8 shad-button_primary"
                onClick={handleFollowAction}
              >
                {currentUser.followers.includes(user.id) ? 'Unfollow' : 'Follow'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {currentUser.$id === user.id && (
        <div className="flex w-full max-w-5xl">
          <Link
            to={`/profile/${id}`}
            className={`profile-tab rounded-l-lg ${pathname === `/profile/${id}` && "!bg-dark-3"
              }`}
          >
            <img
              src={"/assets/icons/posts.svg"}
              alt="posts"
              width={20}
              height={20}
              className="mr-2"
            />
            Posts
          </Link>
          <Link
            to={`/profile/${id}/liked-posts`}
            className={`profile-tab rounded-r-lg ${pathname === `/profile/${id}/liked-posts` && "!bg-dark-3"
              }`}
          >
            <img
              src={"/assets/icons/like.svg"}
              alt="like"
              width={20}
              height={20}
              className="mr-2"
            />
            Liked Posts
          </Link>
        </div>
      )}

      <Routes>
        <Route
          index
          element={currentUser && currentUser.posts && (
            <GridPostList posts={currentUser.posts} showUser={false} />
          )}
        />
        {currentUser && currentUser.$id === user.id && (
          <Route
            path="/liked-posts"
            element={<LikedPosts likedPosts={currentUser.liked} />}
          />
        )}
      </Routes>
      <Outlet />
    </div>
  );
};

export default Profile;
