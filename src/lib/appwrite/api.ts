import { INewUser } from "../../types/index.ts";
import { account } from "./config.ts";
import { ID } from "appwrite";

export async function CreateUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}
