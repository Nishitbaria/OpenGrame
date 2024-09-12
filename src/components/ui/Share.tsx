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
import { Copy, Check } from "lucide-react";

type ShareProps = {
  shareurl: string;
  handleShare: () => void;
};

const Share = ({ shareurl, handleShare }: ShareProps) => {
  const [urlCopied, setUrlCopied] = useState(false);

  const handleCopyClick = () => {
    setUrlCopied(true);
    window.navigator.clipboard.writeText(shareurl);
    setTimeout(() => setUrlCopied(false), 2000); // Reset after 2 seconds
  };

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
          className="cursor-pointer invert-white"
          src={"/assets/icons/share.svg"}
          alt="share"
          width={24}
          height={24}
          tabIndex={0}
          onClick={handleShare}
        />
      </DialogTrigger>
      <DialogContent className="bg-dark-2 border border-dark-4 text-light-1">
        <DialogHeader>
          <DialogTitle className="h3-bold">Share Link</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="base-medium">Share this Post via</p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {data.map((ele) => {
              return (
                <div
                  key={ele.label}
                  className="flex flex-col items-center justify-between gap-2 cursor-pointer"
                >
                  {ele.icon}
                  <span className="small-medium capitalize">{ele.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-2">
          <p className="base-medium">Or copy link</p>
          <p className="small-regular text-light-3">
            Anyone who has this link will be able to view this
          </p>
          <div className="flex justify-center gap-2 align-center">
            <input
              readOnly
              className="flex-1 bg-dark-4 border-none rounded-lg p-2 text-light-1 small-medium focus:ring-1 focus:ring-primary-500"
              value={shareurl}
            />
            <Button
              className={`shad-button_primary ${urlCopied ? "bg-green-500" : ""}`}
              onClick={handleCopyClick}
            >
              {urlCopied ? (
                <>
                  <Check className="mr-2" size={20} />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2" size={20} />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Share;
