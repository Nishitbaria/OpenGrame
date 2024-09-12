import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "./Logout";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useToast } from "@/components/ui/use-toast";

export default function Settings() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) {
      navigate("/sign-in");
    }
  }, [isSuccess, navigate]);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      toast({
        title: "Logged out successfully",
        variant: "default",
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error logging out",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="saved-container">
      <div className="flex w-full max-w-5xl gap-2">
        <img
          src="/assets/icons/Settings.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="w-full text-left h3-bold md:h2-bold">Settings</h2>
      </div>

      <div className="p-6 rounded-lg w-full shadow bg-[#09090A]">
        <h2 className="text-2xl font-bold">Logout</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          You can log out of your account at any time. This will sign you out of
          all devices and sessions.
        </p>
        <button
          className="flex items-center gap-2 mt-4"
          onClick={handleSignOut}
          disabled={isLoading}
        >
          <LogOut fnc={handleSignOut} />
          {isLoading && <span>Logging out...</span>}
        </button>
      </div>

      <div className="p-6 rounded-lg w-full shadow bg-[#09090A]">
        <a className="text-2xl font-bold" href="/privacypolicy">Privacy Policy</a>
      </div>

      <div className="p-6 rounded-lg w-full shadow bg-[#09090A]">
        <a className="text-2xl font-bold" href="/licensing">Licensing</a>
      </div>

      <div className="p-6 rounded-lg w-full shadow bg-[#09090A]">
        <a className="text-2xl font-bold" href="/termsandconditions">Terms and Conditions</a>
      </div>
    </div>
  );
}