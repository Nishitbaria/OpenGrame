import PostForm from "@/components/forms/PostForm";
import Image from "/asset/icons/add-post.svg";
const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start">
          <img
            src={Image}
            alt="add"
            style={{height:40,width:40}}
          />
          <h2 className="h3-bold md:h2-bold text-left w-full"> Create Post</h2>
        </div>
        <PostForm action="Create" />
      </div>
    </div>
  );
};

export default CreatePost;
