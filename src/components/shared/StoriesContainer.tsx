import { useRef } from "react";
import Story from "../ui/Story";
const users = [
  {
    id: 1,
    name: "Tatiana Pavlova",
    username: "tatiana_pavlova",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1626071466175-79ab723e9fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80",
    stories: [
      {
        image_url:
          "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        image_url:
          "https://images.pexels.com/photos/973590/pexels-photo-973590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        image_url:
          "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        image_url:
          "https://images.pexels.com/photos/19660026/pexels-photo-19660026/free-photo-of-bmw-headquarters-in-munich.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        image_url:
          "https://images.pexels.com/photos/10967/pexels-photo-10967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 2,
    name: "Aiony Haust",
    username: "aiony_haust",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    stories: [
      {
        image_url:
          "https://cdn.pixabay.com/photo/2023/12/28/14/09/cat-8474233_1280.png",
      },
      {
        image_url:
          "https://cdn.pixabay.com/photo/2024/04/16/16/25/ai-generated-8700383_1280.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Joel Mott",
    username: "joel_mott",
    isUpdate: true,
    image_url:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
    stories: [
      {
        image_url:
          "https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 4,
    name: "Caique Silva",
    username: "caique_silva",
    isUpdate: true,
    image_url:
      "https://images.unsplash.com/photo-1504363081893-c8226db66926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    stories: [],
  },
  {
    id: 5,
    name: "Jemima Wood",
    username: "jemima_wood",
    isUpdate: true,
    image_url:
      "https://images.unsplash.com/photo-1644456070980-a6be4db8910a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    stories: [],
  },
  {
    id: 6,
    name: "Leio McLaren",
    username: "leio_mclaren",
    isUpdate: true,
    image_url:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    stories: [],
  },
  {
    id: 7,
    name: "Alex Suprun",
    username: "alex_suprun",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    stories: [],
  },
  {
    id: 8,
    name: "Charles Deluvio",
    username: "charles_deluvio",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    stories: [],
  },
  {
    id: 9,
    name: "Luis Villasmil",
    username: "luis_villasmil",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    stories: [],
  },
  {
    id: 10,
    name: "Jabari Timothy",
    username: "jabari_timothy",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1656473040206-53753fbbc767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    stories: [],
  },
  {
    id: 11,
    name: "Ben Parker",
    username: "ben_parker",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    stories: [],
  },
  {
    id: 12,
    name: "Ayo Ogunseinde",
    username: "ayo_ogunseinde",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    stories: [],
  },
  {
    id: 13,
    name: "Vince Fleming",
    username: "vince_fleming",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    stories: [],
  },
  {
    id: 14,
    name: "Huston Wilson",
    username: "huston_wilson",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    stories: [],
  },
  {
    id: 15,
    name: "Leon Ell'",
    username: "leon_ell",
    isUpdate: false,
    image_url:
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    stories: [],
  },
];
export default function StoriesContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    console.log("LEFT");

    if (containerRef?.current) {
      containerRef.current.scrollLeft -= 100; // Adjust the scrollLeft value as needed
    }
  };

  // Define a function to handle moving the scrollbar to the right
  const scrollRight = () => {
    if (containerRef?.current) {
      containerRef.current.scrollLeft += 100; // Adjust the scrollLeft value as needed
    }
  };

  return (
    <>
      {/* <StoryModel onClose={() => {}} stories={data} /> */}

      <div className="w-[86vw] sm:w-[640px] md:w-[500px] lg:w-full  flex justify-center items-center relative">
        <button
          className="hidden md:block absolute -left-[3%] top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 p-1 text-center rounded-full text-sm text-pink-500 w-8 h-8"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div
          ref={containerRef}
          className="w-full my-1 flex justify-start items-start space-x-3 overflow-x-auto p-1 px-2 rounded drop-shadow-xl  no-scrollbar"
        >
          <Story user={users[2]} isYourStory={true} />
          {users.map((user) => {
            return <Story key={user.id} user={user} isYourStory={false} />;
          })}
        </div>

        <button
          className="hidden md:block absolute -right-[3%] top-1/2 transform -translate-y-1/2 bg-gray-900 p-1 text-center rounded-full text-sm text-pink-500 w-8 h-8"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </>
  );
}
