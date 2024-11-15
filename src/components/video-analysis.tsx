import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function VideoAnalysis() {
  return (
    <div className="border-2 rounded-md border-primary max-h-full p-8 w-1/2 ">
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <div className="w-full h-full  rounded-lg flex items-center justify-center flex-col ">
          <h1 className="text-3xl font-bold">Analysis Result</h1>
          <h2 className="text-muted-foreground">
            AI-generated title and description will appear here
          </h2>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm  text-foreground font-bold">Extracted Title</p>
          <Input
            id="title"
            placeholder="AI-generated title will appear here"
            className="mt-1"
          />
        </div>
        <div>
          <p className="text-sm  text-foreground font-bold">
            Extracted Title Extracted Description
          </p>
          <Textarea
            id="description"
            placeholder="AI-generated description will appear here"
            className="mt-1 max-h-32"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
}
