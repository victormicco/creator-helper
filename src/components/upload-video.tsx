import { Upload, Wand2 } from "lucide-react";
import { Button } from "./ui/button";

import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";

export default function UploadVideo() {
  const [videoPath, setVideoPath] = useState<string | null>(null);
  async function selectVideo() {
    try {
      const path = await open({
        multiple: false,
        filters: [
          { name: "Video Files", extensions: ["mp4", "mkv", "avi", "mov"] },
        ],
      });

      if (typeof path === "string") {
        setVideoPath(path);
        console.log("Selected video path:", path);
      } else {
        console.error("No file selected");
      }
    } catch (error) {
      console.error("Error selecting file:", error);
    }
  }

  async function uploadVideo() {
    if (!videoPath) {
      console.error("No video selected");
      return;
    }

    try {
      const result = await invoke("video_processor", { videoPath });
      console.log("Video processed:", result);
    } catch (error) {
      console.error("Error processing video:", error);
    }
  }

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
              <Button onClick={selectVideo} className="mt-2">
                Select Video
              </Button>

              {videoPath && (
                <p className="text-sm text-foreground mt-2 truncate">
                  {videoPath}
                </p>
              )}
            </div>
          </div>
        </div>

        <Button
          className="w-1/4 flex items-center justify-center space-x-2"
          onClick={uploadVideo}
          disabled={!videoPath}
        >
          <Wand2 className="h-5 w-5" />
          <span>Analyze Video</span>
        </Button>
      </div>
    </div>
  );
}
