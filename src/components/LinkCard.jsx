import {Copy, Download, LinkIcon, Trash} from "lucide-react";
import {Link} from "react-router-dom";
import {Button} from "./ui/button";
import useFetch from "@/hooks/use-fetch";
import {deleteUrl} from "@/db/apiUrls";
import {BeatLoader} from "react-spinners";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const LinkCard = ({url = [], fetchUrls}) => {
  const downloadImage = () => {
    const imageUrl = url?.qr;
    const fileName = url?.title; // Desired file name for the downloaded image

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = fileName;
    anchor.target = "_blank";

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger the download by simulating a click event
    anchor.click();

    // Remove the anchor from the document
    document.body.removeChild(anchor);
  };

  const {loading: loadingDelete, fn: fnDelete} = useFetch(deleteUrl, url.id);

  return (
    <div className="flex flex-col md:flex-row gap-5 border p-4 bg-card rounded-lg">
      <img
        src={url?.qr}
        className="h-32 object-contain ring ring-ring self-start"
        alt="qr code"
      />
      <Link to={`/link/${url?.id}`} className="flex flex-col flex-1">
        <span className="text-3xl font-extrabold hover:underline cursor-pointer">
          {url?.title}
        </span>
        <span className="text-sm sm:text-2xl text-primary font-bold hover:underline cursor-pointer">
          https://shortnnr.vercel.app/{url?.custom_url ? url?.custom_url : url.short_url}
        </span>
        <span className="text-sm sm:text-xl flex items-center gap-1 hover:underline cursor-pointer">
          <LinkIcon className="p-1" />
          {url?.original_url}
        </span>
        <span className="flex items-end font-extralight text-sm flex-1">
          {new Date(url?.created_at).toLocaleString()}
        </span>
      </Link>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          onClick={() =>
            navigator.clipboard.writeText(`https://shortnnr.vercel.app/${url?.short_url}`)
          }
        >
          <Dialog>
            <DialogTrigger>
              <Copy />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mx-auto">Short link copied</DialogTitle>
              </DialogHeader>
              <span className="text-sm sm:text-2xl text-primary font-bold cursor-pointer mx-auto">
                https://shortnnr.vercel.app/{url?.custom_url ? url?.custom_url : url.short_url}
              </span>
            </DialogContent>
          </Dialog>
        </Button>
        <Button variant="ghost" onClick={downloadImage}>
          <Download />
        </Button>
        <Button 
          variant="ghost"
        >
          <Dialog>
            <DialogTrigger>
              <Trash />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mx-auto">Are you sure you want to delete this URL?</DialogTitle>
              </DialogHeader>
              <Button 
              variant="destructive" 
              className="w-auto mx-auto"
              onClick={() => fnDelete().then(
              () => fetchUrls())}
              disable={loadingDelete}
              >
                {loadingDelete ? 
                <BeatLoader size={5} color="black"/>
                :
                "Yes, delete !!"
                }
                </Button>
            </DialogContent>
          </Dialog>
        </Button>
      </div>
    </div>
  );
};

export default LinkCard;