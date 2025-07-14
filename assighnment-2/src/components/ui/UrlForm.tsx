"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function UrlForm({ onSubmit, isLoading }: { 
  onSubmit: (url: string) => void;
  isLoading?: boolean;
}) {
  const [url, setUrl] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="blog-url" className="text-purple-700 font-medium my-4 mx-1">
          Blog URL
        </Label>
        <Input
          id="blog-url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter blog url.."
          disabled={isLoading}
          className="mt-1 focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <Button 
        onClick={() => onSubmit(url)}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Summarize Blog"}
      </Button>
    </div>
  );
}
