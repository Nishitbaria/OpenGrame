import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { useState } from "react";

type ShareProps = {
  shareurl: string;
  handleShare: () => void;
};

const Share = ({ shareurl, handleShare }: ShareProps) => {
  const [urlCopied, setUrlCopied] = useState(false);
  const data = [
    {
      label: "Facebook",
      icon: (
        <FacebookShareButton url={shareurl}>
          <FacebookIcon size={30} round />
        </FacebookShareButton>
      ),
    },

    {
      label: "Whatsapp",
      icon: (
        <WhatsappShareButton url={shareurl}>
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
      ),
    },
    {
      label: "Twitter",
      icon: (
        <TwitterShareButton url={shareurl}>
          <TwitterIcon size={30} round />
        </TwitterShareButton>
      ),
    },
    {
      label: "Telegram",
      icon: (
        <TelegramShareButton url={shareurl}>
          <TelegramIcon size={30} round />
        </TelegramShareButton>
      ),
    },
    {
      label: "Email",
      icon: (
        <EmailShareButton url={shareurl}>
          <EmailIcon size={30} round />
        </EmailShareButton>
      ),
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          className="cursor-pointer "
          src={"/assets/icons/share.svg"}
          alt="share"
          width={24}
          height={24}
          tabIndex={0}
          onClick={handleShare}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Link</DialogTitle>
        </DialogHeader>
        <div>
          <p className="mb-4 text-md ">Share this Post via</p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {data.map((ele, index) => {
              return (
                <div
                  key={ele.label}
                  className="flex flex-col items-center justify-between gap-2 cursor-pointer"
                >
                  {ele.icon}
                  <span className="text-sm capitalize">{ele.label}</span>
                </div>
              );
            })}
          </div>
        </div>{" "}
        <div>
          <p className="mb-2 text-md">Or copy link</p>
          <p className="mb-2 text-gray-500 text-md">
            Anyone who has this link will be able to view this
          </p>
          <div className="flex justify-center gap-1 align-center">
            <input
              readOnly
              className=" border border-white-800 rounded-sm w-[100%] p-2 bg-[#09090A] outline-none"
              value={shareurl}
            ></input>
            <Button
              className={urlCopied ? "bg-green-400" : "bg-white"}
              onClick={() => {
                setUrlCopied(true);
                window.navigator.clipboard.writeText(shareurl);
              }}
            >
              <img
                src={"/assets/icons/copy.svg"}
                alt="edit"
                width={20}
                height={20}
                className=" invert" // Add consistent spacing after the img tag
              />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Share;
