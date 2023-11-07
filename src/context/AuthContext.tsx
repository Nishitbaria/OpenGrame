import { getCurrenntUser } from "@/lib/appwrite/api";
import { IContextType, IUser } from "@/types";
import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
export const INITIAL_USER = {
  id: "",
  name: "",
  username: " ",
  email: "",
  imageUrl: "",
  bio: "",
};

export const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  setIsLoading: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const checkAuthUser = async () => {
    try {
      const currentAcoount = await getCurrenntUser();

      if (currentAcoount) {
        setUser({
          id: currentAcoount.$id,
          name: currentAcoount.name,
          username: currentAcoount.username,
          email: currentAcoount.email,
          imageUrl: currentAcoount.imageUrl,
          bio: currentAcoount.bio,
        });

        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    
      // localStorage.getItem("cookieFallback") === null
    if (
      localStorage.getItem("cookieFallback") === "[]" 
    ) {
      navigate("/sign-in");
    }
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const userUserContext = () => useContext(AuthContext);
