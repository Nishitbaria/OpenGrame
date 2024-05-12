import { useEffect,useState } from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
const LeftSidebar = () => {
  const [logout,setLogout]=useState(false)
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const { pathname } = useLocation();
  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);
  const cancel=()=>setLogout(!logout)
  return (
    <>
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <Link className="flex gap-3 items-center" to={`/profile/${user.id}`}>
          <img
            className="h-14 w-14 rounded-full"
            src={user.imageUrl || `/assets/icons/profile-placeholder.svg`}
            alt="profile"
          />
          <div className="flex flex-col">
            <p className="body-bold"> {user.name} </p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group  ${
                  isActive && "bg-primary-500"
                } `}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  {" "}
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-center gap-1">
      <AlertDialog>
        <AlertDialogTrigger>
        <Button
          className="shad-button_ghost"
          onClick={() => setLogout(true)}
        >
          <img src="/assets/icons/logout.svg" alt="logout" />
          <p className="small-medium lg-base-medium"> Logout </p>
        </Button>
        {logout && (
        <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout</AlertDialogTitle>
          <AlertDialogDescription>
            If you wish to log out, please click 'Continue' to confirm or 'Cancel' to abort.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cancel_button" onClick={cancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction  className="logout_button" onClick={() => signOut()}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    )}
        </AlertDialogTrigger>
        </AlertDialog>
        <Link to="/settings" className="shad-button_ghost">
          <img src="/assets/icons/Settings.svg" alt="Settings" />
          <p className="small-medium lg-base-medium"> Settings </p>
        </Link>
      </div>
    </nav>
    </>
  );
};

export default LeftSidebar;
