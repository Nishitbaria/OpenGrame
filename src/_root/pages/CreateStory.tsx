import CreateStoryForm from "@/components/forms/CreateStoryForm";
import Image from "/assets/icons/stories.svg";
const CreateStory = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start">
          <img
            className="invert-white"
            src={Image}
            alt="add"
            style={{ height: 40, width: 40, color: "#fff" }}
          />
          <h2 className="h3-bold md:h2-bold text-left w-full"> Upload Story</h2>
        </div>
        <CreateStoryForm />
      </div>
    </div>
  );
};

export default CreateStory;
