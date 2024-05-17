import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import StoryModel from "../shared/StoryModel";

interface StoryProps {
  user: {
    id: string;
    name: string;
    image_url: string;
    stories: {
      image_url: string;
      isOld: boolean;
      createdDate: string;
    }[];
  };
  isYourStory: boolean;
}

export default function StoryComponent({ user, isYourStory }: StoryProps) {
  const navigate = useNavigate();
  return (
    <Dialog>
      <li className="flex flex-none flex-col items-center space-y-1">
        <DialogTrigger>
          <div
            className={`relative bg-gradient-to-tr from-blue-400 to-fuchsia-600 p-1 rounded-full`}
          >
            <img
              src={user.image_url}
              alt={user.name}
              className="w-16 h-16 p-[3px] rounded-full object-cover bg-black"
            />
            {isYourStory && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-1 border border-[#de4bff] border-2 rounded-md"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.125 16C12.4742 16 16 12.4742 16 8.125C16 3.77576 12.4742 0.25 8.125 0.25C3.77576 0.25 0.25 3.77576 0.25 8.125C0.25 12.4742 3.77576 16 8.125 16Z"
                  fill="#00000052"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.61719 4.67969C8.61719 4.40786 8.39683 4.1875 8.125 4.1875C7.85317 4.1875 7.63281 4.40786 7.63281 4.67969V7.63281H4.67969C4.40786 7.63281 4.1875 7.85317 4.1875 8.125C4.1875 8.39683 4.40786 8.61719 4.67969 8.61719H7.63281V11.5703C7.63281 11.8421 7.85317 12.0625 8.125 12.0625C8.39683 12.0625 8.61719 11.8421 8.61719 11.5703V8.61719H11.5703C11.8421 8.61719 12.0625 8.39683 12.0625 8.125C12.0625 7.85317 11.8421 7.63281 11.5703 7.63281H8.61719V4.67969Z"
                  fill="#d000ff"
                />
              </svg>
            )}
          </div>
        </DialogTrigger>

        <Link to="#" className="small-regular text-white-800 ">
          {isYourStory ? "My Story" : user.name.slice(0, 8)}
        </Link>
      </li>
      <DialogContent>
        <DialogHeader></DialogHeader>
        {user.stories.length > 0 ? (
          <StoryModel
            stories={user.stories}
            avatar={user.image_url}
            username={user.name}
          />
        ) : isYourStory ? (
          <>
            <h1 className="w-full text-center uppercase text-xl font-bold">
              No Stories
            </h1>
            <button
              onClick={() => {
                navigate("/upload-story");
              }}
            >
              Upload New Story
            </button>
          </>
        ) : (
          <h1 className="w-full text-center uppercase text-xl font-bold">
            No Stories
          </h1>
        )}
      </DialogContent>
    </Dialog>
  );
}
