import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false; // Set this to true when you want to display the content

const isLoding = false ;

  
  return (
    <>
      {isAuthenticated ? (
        <>
          <Navigate to="/sign-up" />
        </>
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-row py-10">
            <Outlet />
          </section>
         

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
