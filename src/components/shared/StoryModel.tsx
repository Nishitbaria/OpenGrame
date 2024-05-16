import { useState, useEffect, useRef } from "react";

import "./Story.css";

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
      return "progress-bar progress-bar-finished";
    } else if (index === storyIndex) {
      //   return storyPaused
      //     ? "progress-bar progress-bar-active progress-bar-paused"
      //     : "progress-bar progress-bar-active";
      return "progress-bar progress-bar-active";
    } else {
      return "progress-bar";
    }
  }

  return (
    <div className="relative w-[100%] h-[500px] ">
      <div className="flex flex-col gap-1">
        <div className="flex gap-4 justify-start items-center  ">
          <div className="w-16 h-16  bg-gradient-to-tr from-blue-400 to-fuchsia-600 p-1 rounded-full">
            <img
              className="w-[100%] h-[100%] rounded-full object-cover"
              src={avatar}
            />
          </div>
          <div className="">
            <span className="text-md capitalize">{username}</span>
          </div>
          {/* {storyPaused && <div className="pause">PAUSED</div>} */}
        </div>
        <div className="progress-bars">
          {stories.map((_, index) => (
            <div className="progress-bar-container" key={index}>
              <div
                style={{ animationDuration: `${DURATION / 1000}s` }}
                className={getProgressBarClassName(index)}
              ></div>
            </div>
          ))}
        </div>
        <div className="relative w-[100%] h-[400px] ">
          <img
            className="w-[100%] h-[100%] object-cover"
            // onMouseDown={() => setStoryPaused(true)}
            onMouseUp={() => setStoryPaused(false)}
            id="img"
            src={stories[storyIndex].image_url}
            alt="story"
          />
          {storyIndex !== 0 && (
            <div
              onClick={() => setStoryIndex((prevIndex) => prevIndex - 1)}
              className="absolute -left-[5%] top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 p-1 text-center rounded-full text-sm text-pink-500 w-8 h-8"
            >
              &lt;
            </div>
          )}
          {storyIndex !== stories.length - 1 && (
            <div
              onClick={() => setStoryIndex((prevIndex) => prevIndex + 1)}
              className="absolute -right-[5%] top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 p-1 text-center rounded-full text-sm text-pink-500 w-8 h-8"
            >
              &gt;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
