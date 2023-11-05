import { Button } from "@/components/ui/button";
import { SignupValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loader from "../../components/shared/Loader.jsx";
import { Link } from "react-router-dom";
import { CreateUserAccount } from "@/lib/appwrite/api.js";

const SignupForm = () => {
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await CreateUserAccount(values);

    console.log(values);
  }
  const isLoding = false;
  return (
    <Form {...form}>
      <div className=" sm:w-420 flex-center  flex-col ">
        <img src="/public/assets/images/logo.svg" />
        <h2 className="h3-bold md:h2:bold text-white pt-5 md:pt-12">
          {" "}
          Create New Account{" "}
        </h2>
        <p className="text-light-3 small-mediam md:base-reguler">
          To use SnapGrame Enter your Details{" "}
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button_primary">
            {isLoding ? (
              <div className="flex-center gap-2 ">
                {" "}
                <Loader /> Loding....
              </div>
            ) : (
              "Sign Ups"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            ALready have an Account?
            <Link
              to="/sign-in"
              className="text-primary-500 text-small-semibold ml-1"
            >
              {" "}
              Log in{" "}
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
