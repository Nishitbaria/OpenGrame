import { Button } from "@/components/ui/button";
import { SigninValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loader from "../../components/shared/Loader.jsx";
import { Link, useNavigate } from "react-router-dom";
import { CreateUserAccount } from "@/lib/appwrite/api.js";
import {
  useCreateUserAccount,
  useSignInAccount,
} from "@/lib/react-query/queriesAndMutations.js";
import { userUserContext } from "@/context/AuthContext.js";

const SigninForm = () => {
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync: signInAccount, isPending: isSigningIn } =
    useSignInAccount();

  const { checkAuthUser, isLoading: isUserLoading } = userUserContext();
  const navigate = useNavigate();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });
    if (!session) {
      return toast({
        title: "Sign in faild please try again",
      });
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();
      navigate("/");
    } else {
      return toast({
        title: "Sign in faild please try again",
      });
    }

    console.log(values);
  }

  //define toast notification
  const { toast } = useToast();

  return (
    <Form {...form}>
      <div className=" sm:w-420 flex-center  flex-col ">
        <img src="/public/assets/images/logo.svg" />
        <h2 className="h3-bold md:h2:bold text-white pt-5 md:pt-12">
          {" "}
          Log in to your account{" "}
        </h2>
        <p className="text-light-3 small-mediam md:base-reguler">
          Welcome back! Please enter your Details{" "}
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-5"
        >
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
            {isSigningIn ? (
              <div className="flex-center gap-2 ">
                {" "}
                <Loader /> Loding....
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            ALready have an Account?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1"
            >
              {" "}
              Sign up{" "}
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
