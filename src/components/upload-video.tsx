import { Upload, Wand2 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function UploadVideo() {
  return (
    <div className="w-1/2">
      <h2 className="text-5xl font-bold text-foreground mb-4">
        Video Analysis
      </h2>
      <p className="text-muted-foreground mb-6">
        Upload your video and let AI extract the title and description for you.
      </p>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-primary">Choose a video</p>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <label htmlFor="video">You can upload any video</label>
              <Input id="video" type="file" />
            </div>
          </div>
        </div>
        <Button className="w-1/4 flex items-center justify-center space-x-2">
          <Wand2 className="h-5 w-5" />
          <span>Analyze Video</span>
        </Button>
      </div>
    </div>
  );
}
