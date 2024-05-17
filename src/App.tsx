import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Explore from "./_root/pages/Explore";
import Saved from "./_root/pages/Saved";
import AllUsers from "./_root/pages/AllUsers";
import CreatePost from "./_root/pages/CreatePost";
import EditPost from "./_root/pages/EditPost";
import PostDetails from "./_root/pages/PostDetails";
import Profile from "./_root/pages/Profile";
import UpdateProfile from "./_root/pages/UpdateProfile";
import Settings from "./components/shared/Settings";
import HomePage from "./_root/pages/HomePage";
import CreateStory from "./_root/pages/CreateStory";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes*/}

        <Route element={<AuthLayout />}>
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private Routes*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/upload-story" element={<CreateStory />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
