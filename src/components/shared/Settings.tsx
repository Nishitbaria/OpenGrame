import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "./Logout";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";

export default function Settings() {
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess, navigate]);

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
        <button className="flex items-center gap-2 mt-4">
          <LogOut fnc={signOut} />
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