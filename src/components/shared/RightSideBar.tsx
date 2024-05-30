import { useGetTopCreators } from "@/lib/react-query/queriesAndMutations";
import Loader from "./Loader";
import UserCard from "./UserCard";

const RightSideBar = () => {
  const { data, isLoading } = useGetTopCreators();
  console.log(data);

  return (
    <div className="flex flex-col text-white p-4 overflow-x-hidden overflow-y-auto custom-scrollbar">
     <h2 className="h3-bold md:h2-bold text-left w-full p-4 py-8"> Top Creators</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className=" grid grid-cols-1 xl:grid-cols-2">
          {data?.documents.map((creator) => (
            <li key={creator.$id} className="flex-1 min-w-[200px] w-full  ">
              <UserCard user={creator} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RightSideBar;
