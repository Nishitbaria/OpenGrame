"use client";
import { FcGoogle } from "react-icons/fc";

import { account } from "@/lib/appwrite/config";
import { OAuthProvider } from "appwrite";

const GoogleLogin = () => {
    return (
        // <h1 className="text-2xl font-bold"></h1>
        <div className=" flex mt-5 justify-center items-center">
            <button
                className="flex justify-center items-center gap-2 border-2 border-slate-600 px-5 py-2 w-full bg-white rounded-lg"
                onClick={() => {
                    account.createOAuth2Session(
                        OAuthProvider.Google,
                        "http://localhost:5173/", // Success URL
                        "http://localhost:3000" // Failure URL

                    );
                }}
            >
                <FcGoogle size={30} />
                <span className=" text-black">Login with Google</span>
            </button>
        </div>
    );
};

export default GoogleLogin;