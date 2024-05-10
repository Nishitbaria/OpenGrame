import { useEffect } from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess, navigate]);

  const handleInviteClick = () => {
    const currentURL = "https://opengram.vercel.app/sign-in";
    navigator.clipboard.writeText(`Hey! I am inviting you to join this amazing Social Media Application: ${currentURL}`)
      .then(() => {
        const popup = document.createElement('div');
        popup.textContent = "Invitation copied to clipboard!";
        popup.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          color: black;
          padding: 10px 20px;
          border-radius: 5px;
          z-index: 9999;
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
          document.body.removeChild(popup);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy URL: ", error);
        alert("Failed to copy URL!");
      });
  };

  return (
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
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${isActive && "bg-primary-500"
                  }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${isActive && "invert-white"
                      }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-4">
        <button
          className="shad-button_ghost"
          onClick={handleInviteClick}
        >
          <img src="/assets/icons/invite.svg" alt="Invite" />
          <p className="small-medium lg-base-medium"> Invite Your Friend </p>
        </button>
      </div>

      <div className="flex flex-center gap-1">
        <Button
          variant="ghost"
          className="shad-button_ghost"
          onClick={() => signOut()}
        >
          <img src="/assets/icons/logout.svg" alt="logout" />
          <p className="small-medium lg-base-medium"> Logout </p>
        </Button>
        <Link to="/settings" className="shad-button_ghost">
          <img src="/assets/icons/Settings.svg" alt="Settings" />
          <p className="small-medium lg-base-medium"> Settings </p>
        </Link>
      </div>
    </nav>
  );
};

export default LeftSidebar;
