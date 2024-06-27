import { Link, NavLink, useLocation } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import InviteModal from "./InviteModal";

const LeftSidebar = () => {
  const { user } = useUserContext();
  const { pathname } = useLocation();

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <Link className="flex items-center gap-3" to={`/profile/${user.id}`}>
          <img
            className="rounded-full h-14 w-14"
            src={user.imageUrl || `/assets/icons/profile-placeholder.svg`}
            alt="profile"
          />
          <div className="flex flex-col">
            <p className="body-bold"> {user.name} </p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-4">
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
                  className="flex items-center gap-4 p-2"
                >
                  {" "}
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`w-5 group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}

          <li className={`leftsidebar-link group   `}>
            <InviteModal />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LeftSidebar;
