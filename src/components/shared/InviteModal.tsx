"use client"
import { Share2Icon, UserPlus2Icon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import InviteForm from "./InviteForm";
import { Button } from "../ui/button";

export default function InviteModal() {

  const shareData = {
    title: "Invite Friends!!",
    text: "OpenGrame is a modern social media app that allows users to connect, share, and explore content in a seamless and engaging way.",
    url: `${window.location.href}`,
  };
  
  const shareHandler = async() => {
    await navigator.share(shareData);
  }

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-4 p-2">
        <UserPlus2Icon className="group-hover:invert-white text-blue-500 w-5 h-5" />{" "}
        Invite
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-row font-bold gap-2 items-start justify-start">
          <UserPlus2Icon className="w-5 h-5" /> Invite Friends
        </DialogHeader>
        <InviteForm />
        <DialogFooter>
          <Button onClick={()=>shareHandler()} className="flex gap-2" variant={"outline"}>
            <Share2Icon className="h-5 w-5" />
            Share
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
