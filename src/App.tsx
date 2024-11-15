import "./App.css";
import UploadVideo from "./components/upload-video";
import VideoAnalysis from "./components/video-analysis";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background to-slate-950 flex items-center justify-center p-4 min-w-screen">
        <div className="w-full flex justify-center items-center gap-x-10 p-48">
          <UploadVideo />
          <VideoAnalysis />
        </div>
      </div>
    </>
  );
}

export default App;
