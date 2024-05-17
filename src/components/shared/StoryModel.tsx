import { useState, useEffect, useRef } from "react";

interface Story {
  image_url: string;
}

interface Props {
  stories: Story[];
  avatar: string;
  username: string;
}

const DURATION = 3000;
export default function StoryModel({ stories, avatar, username }: Props) {
  const [storyPaused, setStoryPaused] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const storyIndexRef = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!storyPaused) {
      timeout = setTimeout(() => {
        if (storyIndexRef.current === stories.length - 1) {
          // End of stories
        } else {
          setStoryIndex((prevIndex) => prevIndex + 1);
        }
      }, DURATION);
    }

    return () => clearTimeout(timeout);
  }, [storyIndex, stories, storyPaused]);

  useEffect(() => {
    storyIndexRef.current = storyIndex;
  }, [storyIndex]);

  function getProgressBarClassName(index: number) {
    if (index < storyIndex) {
      return "w-full";
    } else if (index === storyIndex) {
      return storyPaused
        ? "animate-progress-bar bg-white w-full"
        : "animate-progress-bar bg-white";
    } else {
      return "w-0";
    }
  }

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col gap-1">
        <div className="flex gap-4 justify-start items-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-400 to-fuchsia-600 p-1 rounded-full">
            <img
              className="w-full h-full p-1 rounded-full object-cover bg-black"
              src={avatar}
              alt="avatar"
            />
          </div>
          <div>
            <span className="text-md capitalize">{username}</span>
          </div>
        </div>
        <div className="flex my-1">
          {stories.map((_, index) => (
            <div
              key={index}
              className="flex-1 bg-gray-500 h-1 mx-0.5 last:mr-0 first:ml-0"
            >
              <div
                style={{ animationDuration: `${DURATION / 1000}s` }}
                className={`h-full bg-white ${getProgressBarClassName(index)}`}
              ></div>
            </div>
          ))}
        </div>
        <div className="relative w-full h-96">
          <img
            className="w-full h-full object-cover"
            onMouseUp={() => setStoryPaused(false)}
            src={stories[storyIndex].image_url}
            alt="story"
          />
          {storyIndex !== 0 && (
            <div
              onClick={() => setStoryIndex((prevIndex) => prevIndex - 1)}
              className="cursor-pointer absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 p-1 text-center rounded-full text-sm text-fuchsia-600 w-8 h-8"
            >
              &lt;
            </div>
          )}
          {storyIndex !== stories.length - 1 && (
            <div
              onClick={() => setStoryIndex((prevIndex) => prevIndex + 1)}
              className="cursor-pointer absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 p-1 text-center rounded-full text-sm text-fuchsia-600 w-8 h-8"
            >
              &gt;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
