import { useEffect,useState } from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";

const LeftSidebar = () => {
  const [logout,setLogout]=useState(false)
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const { pathname } = useLocation();
  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

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
        <Button
          variant="ghost"
          className="shad-button_ghost"
          onClick={() => setLogout(true)}
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
    {logout?
    <div style={{position:'fixed',height:250,width:350,backgroundColor:'rgb(9 9 10 /1)',top:0,right:0,left:0,bottom:0,margin:'auto',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center',borderRadius:12
    }}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'2rem'}}>
    <img src="/assets/icons/logout.svg" alt="logout" style={{width:40,height:40}} />
          <p style={{fontSize:'2rem',fontWeight:'700'}}> Logout </p>
    </div>
    <p style={{textAlign:'center',padding:10}}>If you wish to log out, please click the 'Logout' button to proceed or click 'Cancel' to remain logged in.</p>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
      <button style={{backgroundColor:'rgb(255 0 105)',padding:'0.3rem 2rem',borderRadius:12,fontWeight:500,cursor:'pointer'}} onClick={()=>signOut()}>Logout</button>
      <button style={{backgroundColor:'rgb(255 255 255)',padding:'0.3rem 2rem',borderRadius:12,fontWeight:500,color:'black',cursor:'pointer'}} onClick={()=>setLogout(false)}>Cancel</button>
    </div>
    </div>
    :<></>
}
    </>
  );
};

export default LeftSidebar;
