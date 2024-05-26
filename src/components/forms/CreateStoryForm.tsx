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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateStory } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { useToast } from "../ui/use-toast";
import FileUploader from "../shared/FileUploader";
import { StoryValidation } from "@/lib/validation";

export default function CreateStoryForm() {
  const { mutateAsync: createStory, isPending: isLoadingCreate } =
    useCreateStory();
  const { user } = useUserContext();
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof StoryValidation>>({
    resolver: zodResolver(StoryValidation),
    defaultValues: {
      file: [],
    },
  });

  const handleSubmit = async (value: z.infer<typeof StoryValidation>) => {
    const newStory = await createStory({
      accountId: user.id,
      file: value.file,
    });

    if (!newStory) {
      toast({
        title: `story  Upload failed. Please try again.`,
      });
      return;
    }

    toast({
      title: `Story Uploded successfully.`,
    });
    navigate("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col w-full max-w-5xl gap-9"
      >
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Photo</FormLabel>
              <FormControl>
                <FileUploader fieldChange={field.onChange} mediaUrl="" />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-4">
          <Button type="button" className="shad-button_dark_4">
            Cancel
          </Button>
          <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap"
            disabled={isLoadingCreate}
          >
            {isLoadingCreate ? "Loading..." : "Upload Story"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
