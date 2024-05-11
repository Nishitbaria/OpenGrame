import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import useDebounce from "@/hooks/useDebounce";
import {
  useGetUsers,
  useSearchUsers
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
  const [searchValue, setSearchValue] = useState<string>("");
  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();
  const debouncedSearch = useDebounce(searchValue, 500)
  const { data: searchedUsers, isFetching: isSearchFetching, isError } = useSearchUsers(debouncedSearch);
  const myusers = creators?.documents.filter((user) => user.username.includes(searchValue))
  const shouldShowSearchResults = searchValue !== "";
  
  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <div className="flex justify-around w-full items-center">
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
        </div>
        {isLoading && !creators ? (
          <Loader />
        ) :
          !isError ? (
            <ul className="user-grid">
              <SearchResults
                isSearchFetching={isSearchFetching}
                searchedUsers={searchedUsers}
              />
            </ul>
          ) : shouldShowSearchResults ? (
            <ul className="user-grid">
              {myusers?.length !== 0 ? myusers?.map((creator) => (
                <li key={creator.$id} className="flex-1 min-w-[200px] w-full  ">
                  <UserCard user={creator} />
                </li>
              )) : <p className="w-full mt-10 text-center text-light-4">No results found</p>}
            </ul>
          ) : (
            <ul className="user-grid">
              {creators?.documents.map((creator) => (
                <li key={creator?.$id} className="flex-1 min-w-[200px] w-full  ">
                  <UserCard user={creator} />
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default AllUsers;
