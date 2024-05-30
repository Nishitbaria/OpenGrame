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
import Loader from "../../components/shared/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useSignInAccount } from "@/lib/react-query/queriesAndMutations.js";
import { useUserContext } from "@/context/AuthContext.js";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync: signInAccount, isPending: isSigningIn } =
    useSignInAccount();

  const { checkAuthUser } = useUserContext();
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
      <div className="flex-col sm:w-420 flex-center">
        <img src="/assets/images/logo.svg" />
        <h2 className="pt-5 text-white h3-bold md:h2:bold md:pt-12">
          {" "}
          Log in to your account{" "}
        </h2>
        <p className="text-light-3 small-mediam md:base-reguler">
          Welcome back! Please enter your Details{" "}
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-5 mt-5"
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
                <div className="relative">
              <FormControl>
                  <Input type={showPassword? "text" :"password" } className="shad-input" {...field} />
                </FormControl>
                <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                     {showPassword ? <EyeOff />: <Eye/> }
                    </button>
              </div>
          
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button_primary">
            {isSigningIn ? (
              <div className="gap-2 flex-center ">
                {" "}
                <Loader /> Loding....
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
          <p className="mt-2 text-center text-small-regular text-light-2">
            Don't have an Account?
            <Link
              to="/sign-up"
              className="ml-1 text-primary-500 text-small-semibold"
            >
              {" "}
              Sign up!{" "}
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
