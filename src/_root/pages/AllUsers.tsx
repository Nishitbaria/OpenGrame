import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import useDebounce from "@/hooks/useDebounce";
import {
  useGetUsers,
  useSearchUsers,
} from "@/lib/react-query/queriesAndMutations";
import { useState } from "react";

export type SearchResultProps = {
  isSearchFetching: boolean;
  searchedUsers: any;
};

const SearchResults = ({
  isSearchFetching,
  searchedUsers,
}: SearchResultProps) => {
  console.log("SEARCH USER CALL ", searchedUsers);

  if (isSearchFetching) {
    return <Loader />;
  } else if (searchedUsers && searchedUsers.documents.length > 0) {
    return searchedUsers.documents.map((user: any) => (
      <li key={user?.$id} className="flex-1 min-w-[200px] w-full  ">
        <UserCard user={user} />
      </li>
    ));
  } else {
    return (
      <p className="w-full mt-10 text-center text-light-4">No results found</p>
    );
  }
};

const AllUsers = () => {
  const { toast } = useToast();
  const { user: loginUser } = useUserContext();
  const [searchValue, setSearchValue] = useState<string>("");
  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();
  const debouncedSearch = useDebounce(searchValue, 500);
  const {
    data: searchedUsers,
    isFetching: isSearchFetching,
    isError: isErrorAppquery,
  } = useSearchUsers(debouncedSearch);

  console.log(searchedUsers);

  const myusers = creators?.documents.filter(
    (user) => user.username.includes(searchValue) && user.$id !== loginUser.id
  );

  const shouldShowSearchResults = searchValue !== "";
  console.log("the value of SearchResults", shouldShowSearchResults);
  console.log("the isError value is ", isErrorAppquery);
  console.log(
    "the value of searchedUsers",
    searchedUsers?.documents.length === undefined
  );

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        <div className="flex w-full gap-1 px-4 rounded-lg bg-dark-4">
          <img
            src="/assets/icons/search.svg"
            width={24}
            height={24}
            alt="search"
          />
          <Input
            type="text"
            placeholder="Search users"
            className="explore-search"
            value={searchValue}
            onChange={(e) => {
              const { value } = e.target;
              setSearchValue(value);
            }}
          />
        </div>
        {isLoading || !creators ? (
          <Loader />
        ) : searchedUsers && searchedUsers.documents?.length > 0 ? (
          <ul className="user-grid">
            <SearchResults
              isSearchFetching={isSearchFetching}
              searchedUsers={searchedUsers}
            />
          </ul>
        ) : shouldShowSearchResults ? (
          <ul className="user-grid w-full">
            {myusers?.length !== 0 && searchValue ? (
              myusers?.map((creator) => {
                return (
                  <li
                    key={creator.$id}
                    className="flex-1 min-w-[200px] w-full  "
                  >
                    <UserCard user={creator} />
                  </li>
                );
              })
            ) : (
              <p className="w-full mt-10 text-center text-light-4  ">
                No results found
              </p>
            )}
          </ul>
        ) : (
          <ul className="user-grid">
            {creators?.documents.map((creator) => {
              if (creator.$id !== loginUser.id) {
                return (
                  <li
                    key={creator.$id}
                    className="flex-1 min-w-[200px] w-full  "
                  >
                    <UserCard user={creator} />
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
