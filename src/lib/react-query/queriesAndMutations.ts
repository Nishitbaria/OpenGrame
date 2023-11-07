import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { CreateUserAccount, signInAccount } from "../appwrite/api";
import { INewUser } from "../../types/index.ts";


//this function is use to create a new user account
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => CreateUserAccount(user),
  });
};
//this function is use to sign in the user
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: {
      email: string;
      password: string;
    }) => signInAccount(user),
  });
};

