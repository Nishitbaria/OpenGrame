import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false; // Set this to true when you want to display the content

  return (
    <>
      {isAuthenticated ? (
        <>
          <Navigate to="/sign-up" />
        </>
      ) : (
        <>
          <div className="flex flex-row items-center justify-center flex-1 py-10">
            <Outlet />
          </div>

          <img
            src="/assets/images/side-img.png"
            alt="logo"
            className="hidden object-cover w-1/2 h-screen bg-no-repeat xl:block"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
