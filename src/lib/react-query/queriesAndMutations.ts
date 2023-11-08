import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  CreateUserAccount,
  createPost,
  getRecentPosts,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import { INewPost, INewUser } from "../../types/index.ts";
import { QUERY_KEYS } from "./queryKeys.ts";

//this function is use to create a new user account
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => CreateUserAccount(user),
  });
};
//this function is use to sign in the user
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

///this function is use to sign out the user
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
      });
    },
  });
};

export const useGetRecentPosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
    queryFn: () => getRecentPosts(),
  })
};
