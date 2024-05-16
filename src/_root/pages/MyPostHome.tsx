import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "@/components/shared/FileUploader";
import { PostValidation } from "@/lib/validation";
import { Models } from "appwrite";
import {
  useCreatePost,
  useUpdatePost,
} from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

type PostFormProps = {
  readonly post?: Models.Document;
  readonly action: "Create" | "Update";
};
// end


// import { useUserContext } from "@/context/AuthContext";
export default function MyPostHome({ post, action }: PostFormProps) {
    // const { user } = useUserContext();

    const { mutateAsync: createPost, isPending: isLoadingCreate } =
    useCreatePost();
  const { mutateAsync: updatePost, isPending: isLoadingUpdate } =
    useUpdatePost();

  const { user } = useUserContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showUploader, setShowUploader] = useState(false);
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : " ",
      file: [],
      location: post ? post?.location : " ",
      tags: post ? post?.tags.join(",") : " ",
    },
  });
  
  const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
    // ACTION = UPDATE
    if (post && action === "Update") {
      const updatedPost = await updatePost({
        ...value,
        postId: post.$id,
        imageId: post.imageId,
        imageUrl: post.imageUrl,
      });

      if (!updatedPost) {
        toast({
          title: `${action} post failed. Please try again.`,
        });
      }
      return navigate(`/posts/${post.$id}`);
    }

    // ACTION = CREATE
    const newPost = await createPost({
        ...value,
        userId: user.id,
      });
  
      if (!newPost) {
        toast({
          title: `${action} post failed. Please try again.`,
        });
      }
      navigate("/");
    };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
      >
    <div className="flex flex-col items-center py-4 rounded-3xl border border-black border-solid bg-zinc-900">
      <div className="flex gap-5 justify-between max-md:flex-wrap">
        <div className="ml-8">
        <img
            className="rounded-full h-[61px] w-[61px] mt-5"
            src={user.imageUrl || `/assets/icons/profile-placeholder.svg`}
            alt="profile"
          />
          </div>

        <div className="mr-8 mt-4 shrink-0 my-auto max-w-full">
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="rounded-[64px] bg-[#444141] h-[58px] w-[724px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        </div>
      </div>
      <div className="self-stretch mt-7 w-full border border-solid bg-zinc-600 border-zinc-600 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 mt-9 w-full text-xl whitespace-nowrap max-w-[935px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-auto gap-5 justify-between px-5 my-auto text-zinc-400 max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1.5">
            <img
              alt='image'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d390da1c9551878c0f3babd3e9cdf99f6970611ae548cf3fcfd061fb2a02c49b?"
              className="shrink-0 aspect-square w-[24px]"
            />
            
            <div className="relative">
          <button onClick={() => setShowUploader(true)}
          className="text-[14px]">
             Upload  file
          </button>
          {showUploader && (
            <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                     
                  <FileUploader
                    fieldChange={field.onChange}
                    mediaUrl={post?.imageUrl}
                  />
                </FormControl>
                <FormMessage className="shad-form_message"></FormMessage>
                <FormMessage />
              </FormItem>
            )}
          />
          )}
        </div>


              <br />
            
          </div>
          <div className="flex gap-3.5">
            <img
              alt='image'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/193c584461d3e2abc872e319c638afb705be485c7404d6a4f885864c1244f69c?"
              className="shrink-0 aspect-square w-[24px]"
            />
            <div className="my-auto  text-[14px]">
              Clip
              <br />
            </div>
          </div>
          <div className="flex gap-2.5">
            <img
              alt='image'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95ff5dca798dc3aca49c63234ded23f8f085f3cabec146638c848968599fd094?"
              className="shrink-0 aspect-square w-[24px]"
            />
            <div className="my-auto text-[14px]">
              Attachment
              <br />
            </div>
          </div>
          <div className="flex gap-2">
            <img
              alt='image'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f6ecc7162602acb7597145fb9cd446b7bfab271b763c1d3421abeb771f4f1f?"
              className="shrink-0 aspect-square w-[24px]"
            />
            <div className="my-auto text-[14px]">Audio</div>
          </div>
        </div>
        
        <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap mr-9"
            disabled={isLoadingCreate || isLoadingUpdate}
          >
            {isLoadingCreate || (isLoadingUpdate && "Loading...")}
            {action} 
            <span className="text-black font-medium">Post</span>
          </Button>
      
      </div>
    </div>
    </form>
    </Form>
  );
}


